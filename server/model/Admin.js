const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema
({
    AdminID: String,
    username: String,
    password: String,
    email: String,
    name: String,
    photo: String
});

const Admin = module.exports = mongoose.model('Admin', AdminSchema);