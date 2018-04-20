const Announcements = require('../../model/Announcements');


handleAnnouncementCreate = (req, res, next) => {
    let AnnouncementArray;
    let announcementID;

    Announcements.distinct('announcementID', (err, callback) =>
    {
        AnnouncementArray = callback;
    }).then(function(){
        do {
            announcementID = String(parseInt(Math.random()*100000));
            while (announcementID.length < 5)
            {
                announcementID = '0' + announcementID;
            }
        }
        while (JSON.stringify(AnnouncementArray).indexOf(announcementID) != -1);

        let newAnnouncement = new Announcements
        ({
            announcementID: announcementID,
            content: req.body.content,
            createdAt: new Date()
        });
        newAnnouncement.save((err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json({
                    success: true,
                    message: "Announcement created"
                });
            } 
        });
    });
}

module.exports = { handleAnnouncementCreate }