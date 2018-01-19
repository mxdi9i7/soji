const Tasks = require('../../model/Tasks')

handleTaskSearch= (req, res, next) => {
    let jobID = req.body.jobID;
    Tasks.find({jobID:jobID}, (err, callback) =>
    {
        res.json(callback);
    });
}

module.exports = { handleTaskSearch }