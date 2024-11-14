const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    const {
      registerName,
      registerEmail,
      registerBirthdayDate,
      registerPassword,
      registerRePassword,
      personelDetails: { registerGender, registerGenderInterest },
      personelQuestions: {
        registerPersonelQ1,
        registerPersonelQ2,
        registerPersonelQ3,
        registerPersonelQ4,
      },
      relationshipQuestions: {
        registerRelationshipQ1,
        registerRelationshipQ2,
        registerRelationshipQ3,
        registerRelationshipQ4,
      },
    } = req.body;

    const newUser = await User.create({
      registerName,
      registerEmail,
      registerBirthdayDate,
      registerPassword,
      registerRePassword,
      personelDetails: {
        registerGender,
        registerGenderInterest,
      },
      personelQuestions: {
        registerPersonelQ1,
        registerPersonelQ2,
        registerPersonelQ3,
        registerPersonelQ4,
      },
      relationshipQuestions: {
        registerRelationshipQ1,
        registerRelationshipQ2,
        registerRelationshipQ3,
        registerRelationshipQ4,
      },
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
  const user = await User.findOne({ registerEmail: loginEmail }).select(
    "+password"
  );
  if (!user || !(await user.correctPassword(loginPassword))) {
    return res.status(401).json({ result: "Incorrect e-mail or password" });
  }
  const token = signToken(user._id);
  res.status(200).json({ token });
};
