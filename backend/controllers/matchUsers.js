import OpenAI from "openai";
import User from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function mergeUserAnswers(user) {
  // Eğer array ise join, değilse Object.values ile array'e çevirip join
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

export const getMatchPercentage = async (req, res) => {
  try {
    const { userA } = req.body;

    if (!userA) {
      return res.status(400).json({ error: "userA responses are required." });
    }

    const userAText = mergeUserAnswers(userA);

    // userA için embedding oluştur
    const userAEmbeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: userAText,
    });

    const userAEmbedding = userAEmbeddingResponse.data[0].embedding;

    // Diğer tüm kullanıcıları çek
    const otherUsers = await User.find({ _id: { $ne: userA._id } });

    const results = [];

    for (const userB of otherUsers) {
      const userBText = mergeUserAnswers(userB);

      const userBEmbeddingResponse = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: userBText,
      });

      const userBEmbedding = userBEmbeddingResponse.data[0].embedding;

      const similarity = cosineSimilarity(userAEmbedding, userBEmbedding);
      const matchPercentage = Math.round(similarity * 100);

      results.push({
        userId: userB._id,
        matchPercentage,
      });
    }

    return res.status(200).json({ matches: results });
  } catch (error) {
    console.error("Embedding match error:", error?.message || error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing embeddings." });
  }
};
