const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentsSchema = new Schema
({
    paymentID: String,
    name: String,
    accountNumber: String,
    company: String,
    bank: String,
    amount: Number,
    transferNumber: String,
    createdAt: Date,
    clientID: String
});

const Payments = module.exports = mongoose.model('Payments', PaymentsSchema);