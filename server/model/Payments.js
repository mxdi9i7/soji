const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentsSchema = new Schema
({
    paymentID: String,
    name: String,
    accountNumber: String,
    company: String,
    transferDate: Date,
    amount: Number,
    description: String,
    jobID: String,
    createdAt: Date
});

const Payments = module.exports = mongoose.model('Payments', PaymentsSchema);