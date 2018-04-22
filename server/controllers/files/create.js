const Files = require('../../model/Files');
const Jobs = require('../../model/Jobs');
const Clients = require('../../model/Clients');
const nodemailer = require('nodemailer');


handleFileCreate = (req, res, next) => {
    let filesArray;
    let fileID;

    Files.distinct('fileID', (err, callback) =>
    {
        filesArray = callback;
    }).then(function(){
        do {
            fileID = String(parseInt(Math.random()*10000000));
            while (fileID.length < 7)
            {
                fileID = '0' + fileID;
            }
        }
        while (JSON.stringify(filesArray).indexOf(fileID) != -1);

        let newFile = new Files
        ({
            jobID: req.body.jobID,
            taskID: req.body.taskID,
            managerID: req.body.managerID,
            fileID: fileID,
            fileTitle: req.body.fileTitle,
            file: req.file,
            rating: 0,
            createdAt: new Date()
        });
        newFile.save((err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    data: err
                });
            } else {
                Jobs.find({jobID: newFile.jobID},{clientID: 1, _id: 0}, (err, job) => {
                    Clients.find({clientID: job[0].clientID}, {email: 1, _id: 0}, (err, client) => {
                        nodemailer.createTestAccount((err, account) => {
                            // create reusable transporter object using the default SMTP transport
                            let transporter = nodemailer.createTransport({
                                host: 'smtp.ethereal.email',
                                port: 587,
                                secure: false, // true for 465, false for other ports
                                auth: {
                                    user: account.user, // generated ethereal user
                                    pass: account.pass // generated ethereal password
                                }
                            });
                        
                            // setup email data with unicode symbols
                            let mailOptions = {
                                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                                to: client[0].email, // list of receivers
                                subject: 'A new file has been uploaded', // Subject line
                                text: 'A new file has been uploaded', // plain text body
                                html: '<b>Hello world?</b>' // html body
                            };
                        
                            // send mail with defined transport object
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    return console.log(error);
                                }
                                console.log('Message sent: %s', info.messageId);
                                // Preview only available when sending through an Ethereal account
                                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                        
                                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                            });
                        });

                        res.json({
                            success: true,
                            data: "File uploaded"
                        });
                    })
                })
            } 
        });
    });
}

module.exports = { handleFileCreate }