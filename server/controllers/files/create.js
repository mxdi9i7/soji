const Files = require('../../model/Files')

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
            fileID: fileID,
            fileName: req.body.fileName,
            createdAt: new Date()
        });
        newFile.save((err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json({
                    success: true,
                    message: "File uploaded"
                });
            } 
        });
    });
}

module.exports = { handleFileCreate }