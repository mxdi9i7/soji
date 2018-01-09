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

const Staffs = module.exports = mongoose.model('Staffs', StaffSchema);