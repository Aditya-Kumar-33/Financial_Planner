const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date }, 
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    country: { type: String },
    currency: { type: String },
    jobTitle: { type: String },
    employmentType: { type: String, enum: ["Full-time", "Part-time", "Freelancer", "Unemployed"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);