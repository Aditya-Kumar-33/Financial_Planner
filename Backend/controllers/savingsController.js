const Savings = require('../models/Savings');
const mongoose = require('mongoose');

// Get savings for a specific user
const getSavings = async (req, res) => {
  try {
    const userId = req.user?._id; // User ID from authentication middleware
    // If authentication is not set up yet, use a mock ID
    if (!userId) {
      console.log("Warning: No user ID found in request, authentication may not be set up");
    }
    
    const query = userId ? { userId } : {};
    const savings = await Savings.find(query).sort({ dateTime: -1 }); // Reverse order by date
    res.json(savings);
  } catch (error) {
    console.error("Error fetching savings:", error);
    res.status(500).json({ message: "Error fetching savings" });
  }
};


const postSavings = async (req, res) => {
  try {
    console.log("Savings POST endpoint hit");
    console.log("123", req.body);
    
    // Check if req.body is empty or undefined
    if (!req.body || Object.keys(req.body).length === 0) {
      console.error("Request body is empty or not parsed properly");
      return res.status(400).json({ 
        message: "No data received. Make sure you're sending data with the correct Content-Type header."
      });
    }
    
    const {userId, amount, type, category, paymentMethod, subCategory, description, dateTime, repeat, nextDueDate } = req.body;
    
    
    console.log("Hi");

    const newTransaction = new Savings({
      userId: new mongoose.Types.ObjectId(userId),
      amount: Number(amount),
      type,
      category,
      paymentMethod,
      subCategory: subCategory || "",
      description: description || "",
      dateTime: new Date(dateTime),
      repeat,
      nextDueDate: nextDueDate ? new Date(nextDueDate) : null,
    });

    console.log("Saving transaction:", newTransaction);
    await newTransaction.save();
    console.log("Transaction saved successfully");
    
    res.status(201).json({ 
      message: "Transaction saved successfully", 
      transaction: newTransaction 
    });
  } catch (error) {
    console.error("Error saving transaction:", error.message);
    console.error(error.stack);
    res.status(500).json({ 
      message: "Error saving transaction", 
      error: error.message 
    });
  }
};

module.exports = { getSavings, postSavings };