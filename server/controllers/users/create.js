const Staff = require('../../model/Staff');

handleStaffCreate = (req, res, next) => {

    Staff.find().sort({staffID: -1}).limit(1).exec((err, callback)=>{
        console.log(callback[0].staffID);
        let staffID = callback[0].staffID;

        staffID = (parseInt(staffID) + 1).toString();
        while(staffID.length < 6)
        {
            staffID = '0' + staffID;
        }

        let staff = new Staff({
            staffID: staffID,
            teamID: '',
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            photo: req.body.photo,
            rating: 0
        });
        staff.save((err, callback) => {
            if(err) {
                res.json({
                    success: false,
                    message: err
                });
            } 
            else {
                res.json({
                    success: true,
                    message: "Task created"
                });
            } 
        });
    });
    // .then(function(){
        

    

    // });

    
}

module.exports = { handleStaffCreate }