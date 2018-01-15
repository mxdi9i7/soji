const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tasksSchema = new Schema
({
    jobID: String,
    taskID: String,
    taskTitle: String,
    taskDescription: String,
    video: String,
    minute: Number,
    createdAt: Date
});

const Tasks = module.exports = mongoose.model('Tasks', tasksSchema);