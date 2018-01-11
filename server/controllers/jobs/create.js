const Jobs = require('../../model/Jobs')

createJob = (req, res, next) => {
    let jobsID;
    let jobsArray;

    Jobs.find( { jobID:{$regex:'/*'} }, { jobID: 1, _id:0 }, (err, callback) =>
    {
        jobsArray = callback;
    }).then(function(){
        do{
            jobsID = String(parseInt(Math.random()*10000000));
            while(jobsID.length < 7)
            {
                jobsID = '0' + jobsID;
            }
        }
        while(JSON.stringify(jobsArray).indexOf(jobsID) != -1);

        let job = new Jobs
        ({
            jobID: jobsID,
            jobTitle: req.body.jobTitle,
            jobDesciption: req.body.jobDesciption,
            quote: req.body.quote,
            approved: false,
            createdAt: new Date()
        });
        job.save((err, callback) => {
            if(err) {
                res.json({
                    success: false,
                    message: err
                });
            } 
            else {
                res.json({
                    success: true,
                    message: "Job created"
                });
            } 
        });
    });
}

module.exports.createJob = createJob;