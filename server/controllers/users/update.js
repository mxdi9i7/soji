const Employee = require('../../model/Employee');

handleStaffUpdate = (req, res, next) => {
    let employee = {
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        photo: req.body.photo
    }
    let query = {staffID: req.body.staffID}
    
    if (employee.photo != undefined && employee.photo != '') {
        Employee.findOne(query, {photo: 1, _id:0}, (err, callback) =>
        {
            cloudinary.v2.uploader.destroy(callback[0].photo, function(error, result)
            {
                if (error) throw error;
                console.log(result);
            });
        }).then(function() {
            Employee.findOneAndUpdate(query, employee, (err, callback) => {
                if (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                } else {
                    res.json({
                        success: true,
                        data: "Employee updated"
                    });
                }
            });
        });
    } else {
        Employee.findOneAndUpdate(query, employee, (err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    data: err
                });
            } else {
                res.json({
                    success: true,
                    data: "Employee updated"
                });
            }
        });
    }    
}

handleStaffRatingUpdate = (req, res, next) => {
    let query = {staffID: req.body.staffID}
    let rating = {$inc: {totalRating: req.body.totalRating, ratingCount: 1}}
    
    Employee.findOneAndUpdate(query, rating, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Employee rating updated"
            });
        }
    });
}

module.exports = { handleStaffUpdate, handleStaffRatingUpdate }