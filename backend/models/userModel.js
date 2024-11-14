const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  registerName: {
    type: String,
    required: [true, "You must have a first name."],
    lowercase: true,
    trim: true,
  },
  registerEmail: {
    type: String,
    required: [true, "You must have an email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
    trim: true,
  },
  registerBirthdayDate: {
    type: Date,
    required: [true, "You must have a birth date."],
    trim: true,
  },
  registerPassword: {
    type: String,
    required: [true, "You must have a password."],
    // select:false
    trim: true,
  },
  registerRePassword: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.registerPassword;
      },
      message: "Passwords are not matching.",
    },
    trim: true,
  },
  personelDetails: {
    registerGender: {
      type: String,
      lowercase: true,
      required: [true, "You must enter your gender"],
      trim: true,
    },
    registerGenderInterest: {
      type: String,
      lowercase: true,
      required: [true, "You must enter your interested gender"],
      trim: true,
    },
  },
  personelQuestions: {
    registerPersonelQ1: {
      type: String,
      required: [true, "You must answer first personel question"],
      trim: true,
    },
    registerPersonelQ2: {
      type: String,
      required: [true, "You must answer second personel question"],
      trim: true,
    },
    registerPersonelQ3: {
      type: String,
      required: [true, "You must answer third personel question"],
      trim: true,
    },
    registerPersonelQ4: {
      type: String,
      required: [true, "You must answer fourth personel question"],
      trim: true,
    },
  },
  relationshipQuestions: {
    registerRelationshipQ1: {
      type: String,
      required: [true, "You must answer first relationship question."],
      trim: true,
    },
    registerRelationshipQ2: {
      type: String,
      required: [true, "You must answer second relationship question."],
      trim: true,
    },
    registerRelationshipQ3: {
      type: String,
      required: [true, "You must answer third relationship question."],
      trim: true,
    },
    registerRelationshipQ4: {
      type: String,
      required: [true, "You must answer fourth relationship question."],
      trim: true,
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("registerPassword")) return next(); // if password is not modified, call next since we don't have to bcrypt.

  this.registerPassword = await bcrypt.hash(this.registerPassword, 12); // hash is an async method.

  this.registerRePassword = undefined; // we don't need to hold re-password.
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.registerPassword);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
