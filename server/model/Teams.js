const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamsSchema = new Schema
({
    submissionID: String,
    StaffID: Array,
    jobID: Array
});

const Teams = module.exports = mongoose.model('Teams', TeamsSchema);

// this model is not being used yet