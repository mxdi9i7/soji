const Employee = require('../../model/Employee');
const Clients = require('../../model/Clients');
const key = "123456";



handleClientRegister = (req, res, next) => {
    let clientArray;
    let clientID;
    let newUser;
    let query = {email: req.body.email }

    Clients.findOne(query, (err, user) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        }
        if (user == null) {
            Clients.find({ clientID:{$regex:'/*'} }, { clientID: 1, _id:0 }, (err, callback) =>
            {
                clientArray = callback;
            }).then(function(){
                do {
                    clientID = String(parseInt(Math.random()*100000));
                    while (clientID.length < 5)
                    {
                        clientID = '0' + clientID;
                    }
                }
                while (JSON.stringify(clientArray).indexOf(clientID) != -1);
                newUser = new Clients({
                    clientID: clientID,
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    photo: req.file.filename,
                    role: "client"
                });
                newUser.save((err, callback) => {
                    if (err) {
                        res.json({
                            success: false,
                            data: err
                        });
                    } else {
                        res.json({
                            success: true,
                            data: "User created"
                        });
                    } 
                });
            });
        } else {
            res.json({
                success: false,
                data: "User exist"
            });
        }
    });
}

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
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            photo: req.file.filename,
            active: true,
            key: req.body.key,
            isManager: false,
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

module.exports = { handleEmployeeCreate, handleClientRegister }