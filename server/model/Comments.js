const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema
({
    submissionID: String,
    content: String,
    fileID: String,
    authorID: String,
    createAt: Date
});

const Comments = module.exports = mongoose.model('Comments', CommentsSchema);