const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema
({
    employeeID: String,
    teamID: String,
    username: String,
    password: String,
    email: String,
    name: String,
    active: Boolean,
    photo: String,
    key: String,
    totalRating: Number,
    ratingCount: Number,
    createdAt: Date,
    role: String
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);