const Jobs = require('../../model/Jobs')

handleJobUpdate = (req, res, next) => {
    let query = {jobID: req.body.jobID}
    let job = {
        teamID: req.body.teamID,
        jobTitle: req.body.jobTitle,
        jobDescription: req.body.jobDescription,
        quote: req.body.quote,
        approved: req.body.approved,
        approvedBy: req.body.approvedBy,
        assignedTo: req.body.assignedTo,
        repeatEvery: req.body.repeatEvery,
        numberOfRepeat: req.body.numberOfRepeat,
        neverExpire: req.body.neverExpire,
        updatedAt: new Date()
    };

    Jobs.findOneAndUpdate(query, job, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "job updated"
            });
        } 
    });

}

module.exports = { handleJobUpdate }