const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamsSchema = new Schema
({
    teamID: String,
    teamName: String,
    creationDate: Date
});

const Teams = module.exports = mongoose.model('Teams', TeamsSchema);

// this model is not being used yet