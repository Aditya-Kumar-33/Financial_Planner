require("dotenv").config();  // Move this to the top

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const savingsRoutes = require('./routes/savingsRoutes');
const investmentRoutes = require('./routes/investmentRoutes');

const app = express();

// Middleware with more detailed CORS settings
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

// Use Express's built-in json middleware instead of bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

// Routes
app.use("/user", userRoutes);
app.use("/savings", savingsRoutes); 
app.use("/investment",investmentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: "Server error", error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));