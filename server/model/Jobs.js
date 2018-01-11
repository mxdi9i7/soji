const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobsSchema = new Schema
({
    jobID: String,
    jobTitle: String,
    jobDesciption: String,
    quote: Number,
    approved: Boolean,
    createdAt: Date
});

const Jobs = module.exports = mongoose.model('Jobs', JobsSchema);