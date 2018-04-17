const Announcements = require('../../model/Announcements')

handleAnnouncementSearchByID= (req, res, next) => {
    let query = {announcementID:req.body.announcementID}

    Announcements.find(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: callback
            });
        } 
    });
}


module.exports = { handleAnnouncementSearchByID }