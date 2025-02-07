const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "../config.env" });
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const { upload } = require("../middlewares/upload");

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

const port = 3000;
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
