const Jobs = require('../../model/Jobs')

searchJob = (req, res, next) => {
    let jobTitle = req.body.jobTitle;
    let titleArray = jobTitle.split(' ');
    let search = '\.*';
    titleArray.forEach(title => {
        search += title + '\.*';
    });
    Jobs.find({jobTitle:{$regex:search}}, (err, callback) =>
    {
        res.json(callback);
    });
}

module.exports.searchJob = searchJob;