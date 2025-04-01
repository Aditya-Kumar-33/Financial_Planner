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
    validate: {
      validator: function(value) {
        const expenseCategories = ['Food', 'Travel', 'Household', 'Lifestyle', 'Miscellaneous'];
        const incomeCategories = ['Salary', 'Business', 'Investments', 'Passive & Other Income'];
        return (
          (this.type === 'Expense' && expenseCategories.includes(value)) ||
          (this.type === 'Income' && incomeCategories.includes(value))
        );
      },
      message: 'Invalid category for selected type'
    }
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['Cash', 'UPI', 'Card', 'Bank Transfer', 'Wallets', 'Other'],
  },
  subCategory: {
    type: String,
    trim: true,
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
  repeat: {
    type: String,
    enum: ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'],
    default: 'None',
  },
  nextDueDate: {
    type: Date,
  },
});

// Auto-set nextDueDate if repeat is enabled
savingsSchema.pre('save', function(next) {
  if (this.repeat !== 'None') {
    const intervalMap = {
      Daily: 1,
      Weekly: 7,
      Monthly: 30,
      Yearly: 365
    };
    this.nextDueDate = new Date(this.dateTime);
    this.nextDueDate.setDate(this.nextDueDate.getDate() + intervalMap[this.repeat]);
  } else {
    this.nextDueDate = null;
  }
  next();
});

const Savings = mongoose.model('Savings', savingsSchema);
module.exports = Savings;
