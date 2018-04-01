const Jobs = require('../../model/Jobs')

handleJobSearchByTitle = (req, res, next) => {
    let jobTitle = req.body.jobTitle;
    let titleArray = jobTitle.split(' ');
    let search = '\.*';
    titleArray.forEach(title => {
        search += title + '\.*';
    });
    console.log(search);
    Jobs.find({jobTitle:{$regex:search}}, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: callback
            });
        } 
    });
}

handleJobSearchByTeamID = (req, res, next) => {
    let query = {teamID:req.body.teamID}

    Jobs.find(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: callback
            });
        } 
    });
}

module.exports = { handleJobSearchByTitle, handleJobSearchByTeamID }