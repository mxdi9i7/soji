const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StaffSchema = new Schema
({
    staffID: String,
    username: String,
    password: String,
    email: String,
    name: String,
    photo: String
});

const Staff = module.exports = mongoose.model('Staff', StaffSchema);