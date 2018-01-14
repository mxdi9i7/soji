const Tasks = require('../../model/Tasks')

searchTask = (req, res, next) => {
    let jobID = req.body.jobID;
    Tasks.find({jobID:jobID}, (err, callback) =>
    {
        res.json(callback);
    });
}

module.exports.searchTask = searchTask;