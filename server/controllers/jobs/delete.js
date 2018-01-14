const Jobs = require('../../model/Jobs')

deleteJob = (req, res, next) => {
    let jobID = req.body.jobID;
    let query = {jobID:jobID}
    Jobs.deleteMany(query, (err, callback) =>
    {
        if(err) throw err;
        res.json(callback);
    });
}

module.exports.deleteJob = deleteJob;