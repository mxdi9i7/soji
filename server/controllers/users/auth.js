const Clients = require('../../model/Clients')
const Staffs = require('../../model/Staffs')


clientLogin = (req, res, next) => {
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

register = (req, res, next) => {
    let clientArray;
    let clientID;
    let newUser;
    let flag = false;

    let query = {username: req.body.username }
    Clients.findOne(query, (err, user) => {
        if(err) return err;
        if(user == null) {
            Clients.find( { clientID:{$regex:'/*'} }, { clientID: 1, _id:0 }, (err, callback) =>
            {
                clientArray = callback;
                do{
                    clientID = String(parseInt(Math.random()*1000000));
                    while(clientID.length < 6)
                    {
                        clientID = '0' + clientID;
                    }
                    for(let i = 0; i < clientArray.length; i++)
                    {
                        if(clientID == clientArray[i])
                        {
                            break;
                        }
                        else
                        {
                            if(i == clientArray -1)
                            {
                                flag = true;
                                break;
                            }
                        }
                    }
                }
                while(flag);
                newUser = new Clients ({
                    clientID: clientID,
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    name: req.body.name,
                    photo: req.body.photo
                });
                newUser.save((err, callback) => {
                    if(err) {
                        res.json({
                            success: false,
                            message: err
                        })
                    } 
                    else {
                        res.json({
                            success: true,
                            message: "User created"
                        });
                   } 
                });
            });
        
        }
        else {
            res.json({
                success: false,
                message: "User exist"
            });
        }
    });
}





module.exports.clientLogin = clientLogin;
module.exports.register = register;