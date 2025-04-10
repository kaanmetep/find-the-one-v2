const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { uploadToCloudinary } = require("../cloudinary");
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      email,
      birthdayDate,
      password,
      occupation,
      rePassword,
      personelDetails, // JSON
      personelQuestions, // JSON
      relationshipQuestions, // JSON
    } = req.body;

    // Parse JSON first
    const parsedPersonelDetails = JSON.parse(personelDetails);
    const parsedPersonelQuestions = JSON.parse(personelQuestions);
    const parsedRelationshipQuestions = JSON.parse(relationshipQuestions);
    const files = req.files;
    if (!files || files.length < 2) {
      return res
        .status(400)
        .json({ error: "You need to upload at least 2 photos!" });
    }

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res
        .status(409)
        .json({ status: "fail", result: "This e-mail is already in use!" });
    }

    const imageUrls = await Promise.all(
      files.map((file) => uploadToCloudinary(file.buffer))
    );

    const newUser = await User.create({
      firstName,
      email,
      birthdayDate,
      password,
      rePassword,
      occupation,
      photos: imageUrls,
      personelDetails: parsedPersonelDetails,
      personelQuestions: parsedPersonelQuestions,
      relationshipQuestions: parsedRelationshipQuestions,
    });

    const token = signToken(newUser._id);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.login = async (req, res) => {
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

exports.checkExistingEmail = async (req, res) => {
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
