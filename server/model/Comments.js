const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema
({
    content: String,
    fileID: String,
    authorRole: String,
    createdAt: Date
});

const Comments = module.exports = mongoose.model('Comments', CommentsSchema);