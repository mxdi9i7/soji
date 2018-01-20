const Tasks = require('../../model/Tasks')

handleTaskSearch= (req, res, next) => {
    let query = {jobID: req.body.jobID}
    Tasks.find(query, (err, callback) =>
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

module.exports = { handleTaskSearch }