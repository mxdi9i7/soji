const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubmissionsSchema = new Schema
({
    taskID: String,
    submissionID: String,
    file: String,
    rating: Number,
    createAt: Date
});

const Submissions = module.exports = mongoose.model('Submissions', SubmissionsSchema);