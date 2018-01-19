const Jobs = require('../../model/Jobs')

handleJobUpdate = (req, res, next) => {

    let query = {jobID: req.body.jobID}
    let job = {
        teamID: req.body.teamID,
        jobTitle: req.body.jobTitle,
        jobDesciption: req.body.jobDesciption,
        quote: req.body.quote,
        approved: req.body.approved,
        approvedBy: req.body.approvedBy,
        updatedAt: new Date()
    };

    Jobs.findOneAndUpdate(query, job, (err, callback) => {
        if(err) throw err;
        res.json(callback);
    });

}

module.exports = { handleJobUpdate }