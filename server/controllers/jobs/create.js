const Jobs = require('../../model/Jobs')

handleJobCreate = (req, res, next) => {
    let jobID;
    let jobsArray;

    // bug:如果重复的不间断发送请求，jobsArray会显示undefined
    Jobs.distinct('jobID', (err, callback) =>
    {
        jobsArray = callback;
    }).then(function(){
        do {
            jobID = String(parseInt(Math.random()*10000000));
            while (jobID.length < 7)
            {
                jobID = '0' + jobID;
            }
        }
        while (JSON.stringify(jobsArray).indexOf(jobID) != -1);

        let newJob = new Jobs
        ({
            jobID: jobID,
            teamID: '',
            clientID: req.body.clientID,
            jobTitle: req.body.title,
            jobDescription: req.body.description,
            quote: 0,
            approved: false,
            approvedBy: '',
            repeatEvery: req.body.repeatEvery,
            numberOfRepeat: req.body.numberOfRepeat,
            neverExpire: req.body.neverExpire,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        newJob.save((err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json({
                    success: true,
                    message: "Job created",
                    data: callback
                });
            } 
        });
    });
}

module.exports = { handleJobCreate }