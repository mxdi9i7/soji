const Clients = require('../../model/Clients')
const Staff = require('../../model/Staff')


handleClientLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    let query = {username: username}
    Clients.findOne(query, (err, user) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        }
        if (user) {
            if(password == user.password){
                res.json({
                    success: true,
                    data: "logged in"
                })
            }
            else {
                res.json({
                    success: false,
                    data: "incorrect password"
                })
            }
        }
        else {
            res.json({
                success: false,
                data: "no user found"
            })
        }
    });
}

handleStaffLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    let query = {username: username}
    Staff.findOne(query, (err, user) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        }
        if (user) {
            if (password == user.password){
                res.json({
                    success: true,
                    data: "logged in"
                })
            } else {
                res.json({
                    success: false,
                    data: "incorrect password"
                })
            }
        }
        else {
            res.json({
                success: false,
                data: "no user found"
            })
        }
    });
}

handleClientRegister = (req, res, next) => {
    let clientArray;
    let clientID;
    let newUser;
    let query = {username: req.body.username }

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
                    name: req.body.name,
                    photo: req.body.photo
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



module.exports = { handleClientLogin, handleStaffLogin, handleClientRegister }