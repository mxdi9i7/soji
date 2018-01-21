const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobsSchema = new Schema
({
    jobID: String,
    teamID: String,
    jobTitle: String,
    jobDescription: String,
    quote: Number,
    approved: Boolean,
    approvedBy: String,
    assignedTo: String,
    createdAt: Date,
    updatedAt: Date
});

const Jobs = module.exports = mongoose.model('Jobs', JobsSchema);