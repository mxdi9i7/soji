const Employee = require('../../model/Employee');
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'cc2018', 
    api_key: '629372726454153', 
    api_secret: '94kiVzYXxasFHWYdTajKcvW8imY' 
});

handleEmployeeDelete = (req, res, next) => {
    let query = {employeeID: req.body.employeeID}

    Employee.findOne(query, {photo: 1, _id:0}, (err, callback) =>
    {
        cloudinary.v2.uploader.destroy(callback[0].photo, function(error, result)
        {
            if (error) throw error;
            console.log(result);
        });
    }).then(function(){
        Employee.deleteOne(query, (err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    data: err
                });
            } else {
                res.json({
                    success: true,
                    data: "Employee deleted"
                });
            } 
        });
    });
    
}

module.exports = { handleEmployeeDelete }