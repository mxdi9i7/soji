const Files = require('../../model/Files')

handleFileSearchByTitle= (req, res, next) => {
    let fileName = req.body.fileName;
    let titleArray = fileName.split(' ');
    let search = '\.*';
    titleArray.forEach(title => {
        search += title + '\.*';
    });
    Files.find({fileName:{$regex:search}}, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: callback
            });
        } 
    });
}

handleFileSearchByTaskID= (req, res, next) => {
    let query = {taskID:req.body.taskID}

    Files.find(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: callback
            });
        } 
    });
}

handleFileSearchByJobID= (req, res, next) => {
    let query = {jobID:req.body.jobID}

    Files.find(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: callback
            });
        } 
    });
}

module.exports = { handleFileSearchByTitle, handleFileSearchByTaskID, handleFileSearchByJobID }