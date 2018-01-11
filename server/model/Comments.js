const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema
({
    submissionID: String,
    title: String,
    content: String,
    authorID: String,
    file: String,
    createAt: Date
});

const Comments = module.exports = mongoose.model('Comments', CommentsSchema);