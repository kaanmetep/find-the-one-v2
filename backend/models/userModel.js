const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  registerName: {
    type: String,
    required: [true, "You must have a first name."],
    lowercase: true,
  },
  registerEmail: {
    type: String,
    required: [true, "You must have an email."],
    unique: true,
    index: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  registerBirthdayDate: {
    type: Date,
    required: [true, "You must have a birth date."],
  },
  registerPassword: {
    type: String,
    required: [true, "You must have a password."],
    select: false,
  },
  registerRePassword: {
    type: String,
    validate: {
      validator: (el) => {
        return el === this.registerPassword;
      },
      message: "Passwords are not matching.",
    },
  },
  personelDetails: {
    registerGender: {
      type: String,
      lowercase: true,
      required: [true, "You must enter your gender"],
    },
    registerGenderInterest: {
      type: String,
      lowercase: true,
      required: [true, "You must enter your interested gender"],
    },
  },
  personelQuestions: {
    registerPersonelQ1: {
      type: String,
      required: [true, "You must answer first personel question"],
    },
    registerPersonelQ2: {
      type: String,
      required: [true, "You must answer second personel question"],
    },
    registerPersonelQ3: {
      type: String,
      required: [true, "You must answer third personel question"],
    },
    registerPersonelQ4: {
      type: String,
      required: [true, "You must answer fourth personel question"],
    },
  },
  relationshipQuestions: {
    registerRelationshipQ1: {
      type: String,
      required: [true, "You must answer first relationship question."],
    },
    registerRelationshipQ2: {
      type: String,
      required: [true, "You must answer second relationship question."],
    },
    registerRelationshipQ3: {
      type: String,
      required: [true, "You must answer third relationship question."],
    },
    registerRelationshipQ4: {
      type: String,
      required: [true, "You must answer fourth relationship question."],
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("registerPassword")) return next(); // if password is not modified, call next since we don't have to bcrypt.

  this.registerPassword = await bcrypt.hash(this.registerPassword, 12); // hash is an async method.

  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.registerPassword);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
