const Staff = require('../../model/Staff');

createStaff = (req, res, next) => {

    const idCount = Staff.find({taskID:{$regex:'/*'} }, {staffID: 1, _id:0 }, (err, callback) =>
    {
        console.log(callback);
    }).sort({staffID: 1}).then(function(){
        
        console.log(idCount);
        // do{
        //     tasksID = String(parseInt(Math.random()*10000000));
        //     while(tasksID.length < 7)
        //     {
        //         tasksID = '0' + tasksID;
        //     }
        // }
        // while(JSON.stringify(tasksArray).indexOf(tasksID) != -1);
    
        let staff = new Staff({
            staffID: req.body.staffID,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            photo: req.body.photo
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

    
}

module.exports.createStaff = createStaff;