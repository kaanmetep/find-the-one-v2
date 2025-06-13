import User from "../models/userModel.js";
import { uploadToCloudinary } from "../cloudinary.js";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    const {
      firstName,
      genderInterest,
      minAge,
      maxAge,
      ageDoesntMatter,
      relationshipType,
      imageDeleted,
      occupation,
      instagram,
      twitter,
      snapchat,
      bluesky,
    } = req.body;

    if (firstName) user.firstName = firstName;
    if (occupation) user.occupation = occupation;
    if (imageDeleted) user.photos.pop();

    if (genderInterest) user.preferences.genderInterest = genderInterest;

    if (ageDoesntMatter) {
      user.preferences.ageDoesntMatter = true;
      user.preferences.minAge = 18;
      user.preferences.maxAge = 90;
    }

    if (!user.preferences.ageDoesntMatter) {
      if (minAge) user.preferences.minAge = minAge;
      if (maxAge) user.preferences.maxAge = maxAge;
    }

    if (relationshipType) user.preferences.relationshipType = relationshipType;

    // Update social media handles if provided
    if (instagram) user.socialMedia.instagram = instagram;
    if (twitter) user.socialMedia.twitter = twitter;
    if (snapchat) user.socialMedia.snapchat = snapchat;
    if (bluesky) user.socialMedia.bluesky = bluesky;

    // Handle photo uploads
    if (req.files && req.files.length > 0) {
      const files = req.files;
      const imageUrls = await Promise.all(
        files.map((file) => uploadToCloudinary(file.buffer))
      );

      req.files.forEach((file, index) => {
        const photoIndex = parseInt(file.originalname) - 1; // '1', '2', '3' -> 0, 1, 2

        if (photoIndex >= 0 && photoIndex < user.photos.length) {
          user.photos[photoIndex] = imageUrls[index];
        }
        if (photoIndex === user.photos.length) {
          // this means user adding a BRAND NEW third photo
          user.photos.push(imageUrls[index]);
        }
      });
    }

    await user.save();
    res.status(200).json({ message: "User updated successfully!", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json({ result: "User not found!" });
    }
    if (!password || !(await user.correctPassword(password))) {
      return res.status(401).json({ result: "Incorrect password!" });
    }
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ result: "User deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

function mergeUserAnswers(user) {
  const personal = Array.isArray(user.personelQuestions)
    ? user.personelQuestions.join(" ")
    : Object.values(user.personelQuestions || {}).join(" ");
  const relationship = Array.isArray(user.relationshipQuestions)
    ? user.relationshipQuestions.join(" ")
    : Object.values(user.relationshipQuestions || {}).join(" ");
  return `Personal: ${personal}\nRelationship: ${relationship}`;
}
function cosineSimilarity(vecA, vecB) {
  const dot = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dot / (magA * magB);
}

export const getAllUsers = async (req, res) => {
  try {
    const {
      genderInterest,
      minAge,
      maxAge,
      relationshipType,
      excludeId,
      personelQuestions,
      relationshipQuestions,
    } = req.query;

    let query = {};
    if (genderInterest) {
      if (genderInterest !== "both") {
        query.gender = genderInterest;
      }
    }
    if (relationshipType) {
      if (relationshipType !== "doesntMatter") {
        query["preferences.relationshipType"] = relationshipType;
      }
    }
    if (minAge || maxAge) {
      query.birthdayDate = {};
      if (maxAge) {
        const minBirthDate = new Date();
        minBirthDate.setFullYear(minBirthDate.getFullYear() - maxAge);
        query.birthdayDate.$gte = minBirthDate;
      }
      if (minAge) {
        const maxBirthDate = new Date();
        maxBirthDate.setFullYear(maxBirthDate.getFullYear() - minAge);
        query.birthdayDate.$lte = maxBirthDate;
      }
    }
    if (excludeId) {
      query._id = { $ne: excludeId };
    }

    const users = await User.find(query);

    let userAEmbedding = null;
    if (personelQuestions && relationshipQuestions) {
      const userA = {
        personelQuestions: JSON.parse(personelQuestions),
        relationshipQuestions: JSON.parse(relationshipQuestions),
      };
      const userAText = mergeUserAnswers(userA);
      const userAEmbeddingResponse = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: userAText,
      });
      userAEmbedding = userAEmbeddingResponse.data[0].embedding;
    }

    const resultWithMatch = [];
    for (const userB of users) {
      let matchPercentage = null;
      if (userAEmbedding) {
        const userBText = mergeUserAnswers(userB);
        const userBEmbeddingResponse = await openai.embeddings.create({
          model: "text-embedding-3-small",
          input: userBText,
        });
        const userBEmbedding = userBEmbeddingResponse.data[0].embedding;
        const similarity = cosineSimilarity(userAEmbedding, userBEmbedding);
        matchPercentage = Math.max(0, Math.round((similarity - 0.6) * 250));
        if (matchPercentage > 100) matchPercentage = 100;
      }
      resultWithMatch.push({
        ...userB.toObject(),
        matchPercentage,
      });
    }

    return res.status(200).json({ result: resultWithMatch });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
