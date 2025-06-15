import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../config.env") });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import * as authController from "../controllers/authController.js";
import * as userController from "../controllers/userController.js";
import { upload } from "../middlewares/upload.js";
import * as emailController from "../controllers/emailController.js";

const app = express();

// CORS ayarları
const corsOptions = {
  origin: ["https://findtheoneai.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Pre-flight istekleri için
app.options("*", cors(corsOptions));

app.use(express.json());

mongoose
  .connect(process.env.DATABASE)
  .then(console.log("db connection is succesfull"));

app.get("/", (req, res) => {
  res.end("hello from the server");
});

app.post("/signup", upload, authController.signup);

app.post("/login", authController.login);

app.get("/users/:id", userController.getUser);

app.get("/users", userController.getAllUsers);

app.patch("/users/:id", upload, userController.updateUser);

app.post("/checkEmail", authController.checkExistingEmail);

app.delete("/users/:id", userController.deleteUser);

app.post("/support", emailController.sendSupportMail);

const port = 3000;
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
