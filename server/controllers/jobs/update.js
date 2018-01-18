const Jobs = require('../../model/Jobs')

updateJob = (req, res, next) => {

    let query = {jobID: req.body.jobID}
    let job;

    Jobs.findOne(query, (err, callback) => {
        if(err) throw err;
        job = new Jobs
        ({
            _id: callback._id,
            jobTitle: req.body.jobTitle,
            jobDesciption: req.body.jobDesciption,
            quote: req.body.quote,
            approved: req.body.approved
        });
    }).then(function(){
        Jobs.findOneAndUpdate(query, job, (err, callback) => {
            if(err) throw err;
            res.json(callback);
        });
    });

}

module.exports.updateJob = updateJob;