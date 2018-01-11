const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientsSchema = new Schema
({
    clientID: String,
    username: String,
    password: String,
    email: String,
    name: String,
    photo: String
});

const Clients = module.exports = mongoose.model('Clients', ClientsSchema);