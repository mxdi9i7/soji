const Staff = require('../../model/Staff');

handleStaffSearch= (req, res, next) => {
    let query = {staffID: req.body.staffID}

    Staff.find(query, (err, callback) =>
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

module.exports = { handleStaffSearch }