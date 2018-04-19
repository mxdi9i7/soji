const Jobs = require('../../model/Jobs')
const Admin = require('../../model/Admin')

handleJobAssign = (req, res) => {
    const { teamID, jobID } = req.body;
    Jobs.findOneAndUpdate({
        jobID
    }, {
        teamID
    }, (err, job) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Job assigned"
            });
        } 
    }) 
}

handleJobUpdate = (req, res, next) => {
    let query = {jobID: req.body.jobID}
    let job = {
        teamID: req.body.teamID,
        jobTitle: req.body.jobTitle,
        jobDescription: req.body.jobDescription,
        quote: req.body.quote,
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

handleJobApprove = (req, res, next) => {
    let adminQuery = {adminID: req.body.adminID}
    Admin.findOne(adminQuery, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else if(callback == null) {
            res.json({
                success: false,
                data: "admin ID incorrect"
            });
        } else {
            let query = {jobID: req.body.jobID}
            let update = { $set:
                {
                    approved: req.body.approved,
                    approvedBy: req.body.adminID
                }
            }
        
            Jobs.findOneAndUpdate(query, update, (err, callback) => {
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
    });

}

module.exports = { handleJobUpdate, handleJobApprove, handleJobAssign }