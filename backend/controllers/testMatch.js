import { getMatchPercentage } from "./matchUsers.js";
import mongoose from "mongoose";

await mongoose.connect(process.env.DATABASE);

const mockUserA = {
  _id: "6806360738f3ad6020e5389c",
  personelQuestions: {
    personelQ1: "I want to travel and explore new cultures",
    personelQ2: "Exploring new places and adventures",
    personelQ3: "Social gatherings (parties, dining out, group events)",
    personelQ4: "A flexible and spontaneous atmosphere",
    personelQ5: "I exercise or do physical activities",
    personelQ6: "I follow my intuition and gut feeling",
    personelQ7:
      "for me happiness is living every moment feeling every moment surrouned with fun people.",
  },
  relationshipQuestions: {
    relationshipQ1: "Daily interaction and frequent dates",
    relationshipQ2: "Physical touch (hugs, holding hands, physical closeness)",
    relationshipQ3: "Complete transparency in all aspects of life",
    relationshipQ4: "Doing fun activities or adventures together",
    relationshipQ5: "It’s essential - I love making my partner laugh",
    relationshipQ6: "A quiet, meaningful moment just between the two of us",
    relationshipQ7:
      "i think my partner has to be fun kind trustworthy and sportive.",
  },
};

// Sahte req ve res objeleri
const mockReq = {
  body: {
    userA: mockUserA,
  },
};

const mockRes = {
  status(code) {
    this.statusCode = code;
    return this;
  },
  json(data) {
    console.log(`Status: ${this.statusCode}`);
    console.log("Response:", JSON.stringify(data, null, 2));
  },
};

await getMatchPercentage(mockReq, mockRes);
await mongoose.disconnect();
