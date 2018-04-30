const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilesSchema = new Schema
({
    jobID: String,
    taskID: String,
    managerID: String,
    fileID: String,
    fileTitle: String,
    file: Object,
    uploadedBy: String,
    createdAt: Date,
    rating: Number
});

const Files = module.exports = mongoose.model('Files', FilesSchema);