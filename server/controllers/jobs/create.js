const Jobs = require('../../model/Jobs')

createJob = (req, res, next) => {
    let jobsID;
    let jobsArray;

    // bug:如果重复的不间断发送请求，jobsArray会显示undefined
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

        let newJob = new Jobs
        ({
            jobID: jobsID,
            jobTitle: req.body.jobTitle,
            jobDesciption: req.body.jobDesciption,
            quote: 0,
            approved: false,
            createdAt: new Date()
        });
        newJob.save((err, callback) => {
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