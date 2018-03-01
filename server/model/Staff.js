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
    key: String,
    totalRating: Number,
    ratingCount: Number
});

const Staff = module.exports = mongoose.model('Staff', StaffSchema);