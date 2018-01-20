const Staff = require('../../model/Staff');
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'cc2018', 
    api_key: '629372726454153', 
    api_secret: '94kiVzYXxasFHWYdTajKcvW8imY' 
});

handleStaffDelete = (req, res, next) => {
    let query = {staffID: req.body.staffID}

    Staff.findOne(query, {photo: 1, _id:0}, (err, callback) =>
    {
        cloudinary.v2.uploader.destroy(callback[0].photo, function(error, result)
        {
            if (error) throw error;
            console.log(result);
        });
    }).then(function(){
        Staff.deleteOne(query, (err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    data: err
                });
            } else {
                res.json({
                    success: true,
                    data: "Staff deleted"
                });
            } 
        });
    });
    
}

module.exports = { handleStaffDelete }