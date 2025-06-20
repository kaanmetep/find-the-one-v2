import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "You must have a first name."],
    lowercase: true,
    trim: true,
    maxlength: [30, "First name must be less than 30 characters long."],
  },
  email: {
    type: String,
    required: [true, "You must have an email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
    trim: true,
  },
  birthdayDate: {
    type: Date,
    required: [true, "You must have a birth date."],
    trim: true,
    validate: {
      validator: function (value) {
        if (!value) return false;
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age >= 18;
      },
      message: "You must be at least 18 years old.",
    },
  },
  password: {
    type: String,
    required: [true, "You must have a password."],
    // select:false
    trim: true,
  },
  rePassword: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not matching.",
    },
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, "You must enter your occupation."],
    lowercase: true,
    trim: true,
  },
  gender: {
    type: String,
    lowercase: true,
    required: [true, "You must enter your gender"],
    trim: true,
  },
  photos: { type: [String], required: true },
  socialMedia: {
    twitter: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    bluesky: {
      type: String,
      trim: true,
    },
    snapchat: {
      type: String,
      trim: true,
    },
  },
  preferences: {
    ageLimitMatters: {
      type: Boolean,
      required: true,
    },
    relationshipType: {
      type: String,
      required: true,
    },
    minAge: {
      type: Number,
      required: true,
    },
    maxAge: {
      type: Number,
      required: true,
    },
    genderInterest: {
      type: String,
      lowercase: true,
      required: [true, "You must enter your interested gender"],
      trim: true,
    },
  },

  personelQuestions: {
    personelQ1: {
      type: String,
      required: [true, "You must answer first personel question"],
      trim: true,
    },
    personelQ2: {
      type: String,
      required: [true, "You must answer second personel question"],
      trim: true,
    },
    personelQ3: {
      type: String,
      required: [true, "You must answer third personel question"],
      trim: true,
    },
    personelQ4: {
      type: String,
      required: [true, "You must answer fourth personel question"],
      trim: true,
    },
    personelQ5: {
      type: String,
      required: [true, "You must answer fourth personel question"],
      trim: true,
    },
    personelQ6: {
      type: String,
      required: [true, "You must answer fourth personel question"],
      trim: true,
    },
    personelQ7: {
      type: String,
      required: [true, "You must answer fourth personel question"],
      trim: true,
    },
  },
  relationshipQuestions: {
    relationshipQ1: {
      type: String,
      required: [true, "You must answer first relationship question."],
      trim: true,
    },
    relationshipQ2: {
      type: String,
      required: [true, "You must answer second relationship question."],
      trim: true,
    },
    relationshipQ3: {
      type: String,
      required: [true, "You must answer third relationship question."],
      trim: true,
    },
    relationshipQ4: {
      type: String,
      required: [true, "You must answer fourth relationship question."],
      trim: true,
    },
    relationshipQ5: {
      type: String,
      required: [true, "You must answer fourth relationship question."],
      trim: true,
    },
    relationshipQ6: {
      type: String,
      required: [true, "You must answer fourth relationship question."],
      trim: true,
    },
    relationshipQ7: {
      type: String,
      required: [true, "You must answer fourth relationship question."],
      trim: true,
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // if password is not modified, call next since we don't have to bcrypt.

  this.password = await bcrypt.hash(this.password, 12); // hash is an async method.

  this.rePassword = undefined; // we don't need to hold re-password.
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
