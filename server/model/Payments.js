const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentsSchema = new Schema
({
    clientID: String,
    amount: Number,
    jobID: String,
    createAt: Date
});

const Payments = module.exports = mongoose.model('Payments', PaymentsSchema);