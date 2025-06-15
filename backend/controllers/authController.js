import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { uploadToCloudinary } from "../cloudinary.js";

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signup = async (req, res) => {
  try {
    const {
      firstName,
      email,
      birthdayDate,
      password,
      occupation,
      rePassword,
      gender,
      socials, // JSON
      preferences, // JSON
      personelQuestions, // JSON
      relationshipQuestions, // JSON
    } = req.body;

    // Parse JSON first
    let parsedSocials,
      parsedPreferences,
      parsedPersonelQuestions,
      parsedRelationshipQuestions;
    try {
      parsedSocials = JSON.parse(socials);
      parsedPreferences = JSON.parse(preferences);
      parsedPersonelQuestions = JSON.parse(personelQuestions);
      parsedRelationshipQuestions = JSON.parse(relationshipQuestions);
    } catch (parseErr) {
      console.error("[SIGNUP] JSON parse error:", parseErr);
      return res
        .status(400)
        .json({ status: "fail", message: "Invalid JSON in request body." });
    }

    if (!req.files || req.files.length < 2) {
      console.warn("[SIGNUP] Not enough photos uploaded.");
      return res
        .status(400)
        .json({ error: "You need to upload at least 2 photos!" });
    }

    const MAX_PHOTO_SIZE = 2 * 1024 * 1024;
    if (req.files && req.files.some((file) => file.size > MAX_PHOTO_SIZE)) {
      return res.status(400).json({
        status: "fail",
        message: "Each photo must be less than 2MB.",
      });
    }

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      console.warn("[SIGNUP] Email already in use:", email);
      return res
        .status(409)
        .json({ status: "fail", result: "This e-mail is already in use!" });
    }

    let imageUrls;
    try {
      imageUrls = await Promise.all(
        req.files.map((file) => uploadToCloudinary(file.buffer))
      );
    } catch (cloudErr) {
      console.error("[SIGNUP] Cloudinary upload error:", cloudErr);
      return res
        .status(500)
        .json({ status: "fail", message: "Photo upload failed." });
    }

    let newUser;
    try {
      newUser = await User.create({
        firstName,
        email,
        birthdayDate,
        password,
        rePassword,
        occupation,
        photos: imageUrls,
        socialMedia: parsedSocials,
        gender,
        preferences: parsedPreferences,
        personelQuestions: parsedPersonelQuestions,
        relationshipQuestions: parsedRelationshipQuestions,
      });
    } catch (userErr) {
      console.error("[SIGNUP] User creation error:", userErr);
      return res
        .status(500)
        .json({ status: "fail", message: "User creation failed." });
    }

    const token = signToken(newUser._id);
    res.status(201).json({ token });
  } catch (err) {
    console.error("[SIGNUP] Uncaught error:", err, err?.stack);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
export const login = async (req, res) => {
  const { loginEmail, loginPassword } = req.body;
  if (!loginEmail || !loginPassword) {
    return res
      .status(400)
      .json({ result: "Please provide an email and a password" });
  }
  const user = await User.findOne({ email: loginEmail }).select("+password");
  if (!user || !(await user.correctPassword(loginPassword))) {
    return res.status(401).json({ result: "Incorrect e-mail or password" });
  }
  const token = signToken(user._id);
  res.status(200).json({ token });
};

export const checkExistingEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(409)
        .json({ status: false, result: "This user already exist!" });
    }
    return res.status(200).json({ status: true });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ status: "fail", message: err.message });
  }
};
