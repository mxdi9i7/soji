const Announcements = require('../../model/Announcements')

handleAnnouncementDeleteByID = (req, res, next) => {
    let query = {fileID: req.body.fileID}
    Announcements.deleteOne(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Announcement deleted"
            });
        } 
    });
}


module.exports = { handleAnnouncementDeleteByID }