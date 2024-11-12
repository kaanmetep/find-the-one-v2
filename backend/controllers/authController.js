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
    res.status(201).json({
      status: "success",
      data: {
        token,
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
