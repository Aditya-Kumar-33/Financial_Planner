const mongoose = require('mongoose');

const savingsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['Expense', 'Income'],
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Food', 'Travel', 'Household', 'Lifestyle', 'Miscellaneous',
      'Salary', 'Business', 'Investments', 'Passive & Other Income' 
    ],
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['Cash', 'UPI', 'Card', 'Bank Transfer', 'Wallets', 'Other'],
  },
  description: {
    type: String,
    trim: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Savings = mongoose.model('Savings', savingsSchema);
module.exports = Savings;
