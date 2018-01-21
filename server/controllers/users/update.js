const Staff = require('../../model/Staff');

handleStaffUpdate = (req, res, next) => {
    let staff = {
        teamID: req.body.teamID,
        password: req.body.teamID,
        email: req.body.email,
        name: req.body.name,
        photo: req.body.photo
    }

    if (photo != undefined) {
        let query = {staffID: req.body.staffID}

        Staff.findOne(query, {photo: 1, _id:0}, (err, callback) =>
        {
            cloudinary.v2.uploader.destroy(callback[0].photo, function(error, result)
            {
                if (error) throw error;
                console.log(result);
            });
        }).then(function() {
            Staff.findOneAndUpdate(query, staff, (err, callback) => {
                if (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                } else {
                    res.json({
                        success: true,
                        data: "Staff updated"
                    });
                }
            });
        });
    } else {
        Staff.findOneAndUpdate(query, staff, (err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    data: err
                });
            } else {
                res.json({
                    success: true,
                    data: "Staff updated"
                });
            }
        });
    }    
}

handleStaffRatingUpdate = (req, res, next) => {
    let query = {staffID: req.body.staffID}
    let rating = {$inc: {totalRating: req.body.totalRating, ratingCount: 1}}
    
    Staff.findOneAndUpdate(query, rating, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Staff rating updated"
            });
        }
    });
}

module.exports = { handleStaffUpdate, handleStaffRatingUpdate }