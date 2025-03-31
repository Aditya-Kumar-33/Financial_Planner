const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signup = async (req, res) => {
  const { name, email, phone, password, companyName, jobTitle, country } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({ name, email, phone, password: hashedPassword, companyName, jobTitle, country });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "User registered successfully", token });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).json({ message: "Invalid email" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Incorrect password" });
      }
  
      const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" }
      );

      res.status(200).json({ 
        message: "Login successful", 
        token,
        name: existingUser.name,
        email: existingUser.email,
        _id:existingUser._id, 
      });
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  