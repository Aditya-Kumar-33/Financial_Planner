const mongoose = require("mongoose");
const dotenv = require("dotenv");

//setup mongodb connection to our mongo uri

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = connectDB;