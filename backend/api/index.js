const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "../config.env" });
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());

mongoose
  .connect(process.env.DATABASE)
  .then(console.log("db connection is succesfull"));

app.get("/", (req, res) => {
  res.end("hello from the server");
});

app.post("/signup", authController.signup);

app.post("/login", authController.login);

app.get("/users/:id", userController.getUser);

app.get("/api/v1/:x?/:y?", (req, res) => {
  console.log(req.params);
  res.status(200).json({ status: "success" });
});

const port = 3000;
app.listen(3000, () => {
  console.log("server is on port 3000");
});
