const Teams = require('../../model/Teams')

handleJobUpdate = (req, res, next) => {
    let query = {jobID: req.body.jobID}
    let team = {
        teamName: req.body.teamName,
        managerID: req.body.managerID
    };

    Teams.findOneAndUpdate(query, team, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "team updated"
            });
        } 
    });

}

module.exports = { handleJobUpdate }