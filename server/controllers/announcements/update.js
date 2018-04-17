const Announcements = require('../../model/Announcements')

handleAnnouncementUpdate = (req, res, next) => {
    let query = {AnnouncementID: req.body.AnnouncementID}
    let update = { $set:
        {
            title: req.body.title,
            description: req.body.description
        }
    }

    Announcements.findOneAndUpdate(query, update, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Announcement updated"
            });
        } 
    });
}


module.exports = { handleAnnouncementUpdate }