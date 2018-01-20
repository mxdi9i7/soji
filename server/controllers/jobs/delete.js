const Jobs = require('../../model/Jobs')

handleJobDelete = (req, res, next) => {
    let jobID = req.body.jobID;
    let query = {jobID:jobID}
    Jobs.deleteMany(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Job deleted"
            });
        } 
    });
}

module.exports = { handleJobDelete }