const Clients = require('../../model/Clients');
const Staff = require('../../model/Staff');
const Admin = require('../../model/Admin');
const jwt = require('jsonwebtoken');
const secret = require('./secret');

token_status = (req, res, next) => {
    if (req.body.soji_token) {
        jwt.verify(req.body.soji_token, secret.secret, (err, decoded) => {
            if (decoded) {
                res.json({
                    success: true,
                    data: "Logged in with jwt"
                })
            } else {
                next();
            }
        })
    } else {
        next();
    }
}

checkIdentity = (req, res) => {
    const token = req.body.token
    jwt.verify(token, secret.secret, (err, decoded) => {
        if (decoded) {
            console.log(decoded.data)
            res.json({
                success: true,
                data: decoded.data
            })
        } else {
            res.json({
                success: false,
                data: "Not identified"
            })
        }
    })
}

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
            if (password == user.password){
                const token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                    email: user.email
                }, secret.secret, {
                    expiresIn: 200
                });

                res.cookie('SOJI_TOKEN', token, {expire : new Date() + 9999, secure:false, httpOnly: false}).json({
                    success: true,
                    data: token
                });
            } else {
                res.json({
                    success: false,
                    data: "incorrect password"
                })
            }
        } else {
            res.json({
                success: false,
                data: "no user found"
            })
        }
    });
}

handleStaffLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let query = {email}
    Staff.findOne(query, (err, user) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        }
        if (user) {
            if (password == user.password){
                const token = jwt.sign({ data: user }, secret.secret, {
                    expiresIn: 604800
                });
    
                res.json({
                    success: true,
                    data: token
                });
            } else {
                res.json({
                    success: false,
                    data: "incorrect password"
                })
            }
        } else {
            res.json({
                success: false,
                data: "no user found"
            })
        }
    });
}

handleAdminLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    let query = {username: username}
    Admin.findOne(query, (err, user) => {
        if (err) {
            res.json({
                success: false,
                data: err
            })
        }
        if (user) {
            if (password == user.password){
                const token = jwt.sign({ data: user }, secret.secret, {
                    expiresIn: 604800
                });
    
                res.json({
                    success: true,
                    data: token
                });
            } else {
                res.json({
                    success: false,
                    data: "incorrect password"
                })
            }
        } else {
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
                    photo: req.body.photo,
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



module.exports = { token_status, handleClientLogin, handleStaffLogin, handleClientRegister, checkIdentity }