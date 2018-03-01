const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilesSchema = new Schema
({
    jobID: String,
    taskID: String,
    fileID: String,
    fileName: String,
    createdAt: Date
});

const Files = module.exports = mongoose.model('Files', FilesSchema);