const Investment = require('../models/Investment');
const mongoose = require('mongoose');

const getInvestment = async (req,res)=>{
    try {
        const userId = req.user?._id;
        if (!userId) {
            console.log("Warning: No user ID found in request, authentication may not be set up");
        }

        const query = userId ? { userId } : {};
        const investment = await Investment.find(query);
        res.json(investment);
    }
    catch (error) {
        console.error("Error fetching savings:", error);
        res.status(500).json({ message: "Error fetching savings" });
    }
}

const postInvestment = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      console.error("Request body is empty or not parsed properly");
      return res.status(400).json({ 
        message: "No data received. Make sure you're sending data with the correct Content-Type header."
      });
    }

    const {
      userId,
      name,
      type,
      invested,
      maturityValue,
      interestRate,
      compoundingType,
      sip,
      startDate,
      maturityDate
    } = req.body;

    const newInvestment = new Investment({
      userId: new mongoose.Types.ObjectId(userId),
      name,
      type,
      invested: Number(invested),
      maturityValue: maturityValue ? Number(maturityValue) : Number(invested),
      interestRate: Number(interestRate) || 0,
      compoundingType,
      sip: sip ? Number(sip) : 0,
      startDate: new Date(startDate),
      maturityDate: maturityDate ? new Date(maturityDate) : new Date(startDate)
    });

    await newInvestment.save();
    res.status(201).json({ 
      message: "Investment saved successfully", 
      investment: newInvestment 
    });
  } catch (error) {
    console.error("Error saving investment:", error.message);
    console.error(error.stack);
    res.status(500).json({ 
      message: "Error saving investment", 
      error: error.message 
    });
  }
};


module.exports = { getInvestment, postInvestment };