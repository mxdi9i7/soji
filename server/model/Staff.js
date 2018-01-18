const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StaffSchema = new Schema
({
    staffID: String,
    teamID: String,
    username: String,
    password: String,
    email: String,
    name: String,
    photo: String,
    rating: Number
});

const Staff = module.exports = mongoose.model('Staff', StaffSchema);