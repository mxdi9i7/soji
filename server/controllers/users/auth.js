const Clients = require('../../model/Clients');
const Employee = require('../../model/Employee');
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
    const email = req.body.email;
    const password = req.body.password;
    let query = {email}
    Clients.findOne(query, (err, user) => {
        console.log(user, query)
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

handleEmployeeLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let query = {email}
    Employee.findOne(query, (err, user) => {
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



module.exports = { token_status, handleClientLogin, handleEmployeeLogin, checkIdentity }