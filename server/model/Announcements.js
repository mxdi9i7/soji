const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnnouncementsSchema = new Schema
({
    announcementID: String,
    content: String,
    createdAt: Date
});

const Announcements = module.exports = mongoose.model('Announcements', AnnouncementsSchema);