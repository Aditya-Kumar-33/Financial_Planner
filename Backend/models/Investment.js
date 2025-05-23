const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Mutual Fund', 'Bond', 'Fixed Deposit', 'Public Provident Fund', 'Recurring Deposit', 'Stock', 'ETF', 'Other'],
        required: true,
    },
    invested: {
        type: Number,
        required: true,
    },
    maturityValue: {
        type: Number
    },
    interestRate: {
        type: Number,
        required: true,
    },
    compoundingType: {
        type: String,
        enum: ['Yearly', 'Half-Yearly', 'Quarterly', 'Monthly', 'None'],
        default: 'Yearly',
    },
    sip: {
        type: Number,
        default: 0,
    },
    startDate: {
        type: Date,
        required: true,
    },
    maturityDate: {
        type: Date
    }
});

const Investment = mongoose.model('Investment', investmentSchema);
module.exports = Investment;