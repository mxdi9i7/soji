const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamsSchema = new Schema
({
    teamID: String,
    teamName: String,
    managerID: String,
    teamMember: Array,
    creationDate: Date
});

const Teams = module.exports = mongoose.model('Teams', TeamsSchema);
