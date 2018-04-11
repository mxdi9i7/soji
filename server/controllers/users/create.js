const Employee = require('../../model/Employee');
const key = "123456";

handleEmployeeCreate = (req, res, next) => {
    Employee.find().sort({employeeID: -1}).limit(1).exec((err, callback)=>{
        let employeeID;
        if(callback[0] != undefined) {
            employeeID = callback[0].employeeID;
        } else {
            employeeID = "0";
        }
        employeeID = (parseInt(employeeID) + 1).toString();
        while (employeeID.length < 6)
        {
            employeeID = '0' + employeeID;
        }

        let employee = new Employee({
            employeeID: employeeID,
            teamID: '',
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            photo: req.file.filename,
            active: true,
            key: req.body.key,
            totalRating: 0,
            ratingCount: 0,
            createdAt: new Date(),
            role: "employee"
        });
        if(employee.key == key)
        {
            employee.save((err, callback) => {
                if (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                } else {
                    res.json({
                        success: true,
                        data: "Employee created"
                    });
                } 
            });
        } else {
            res.json({
                success: false,
                data: "key does not match"
            });
        }
        
    });
    
}

module.exports = { handleEmployeeCreate }