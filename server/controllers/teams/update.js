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

handleAddOneMember = (req, res, next) => {
    let query = {teamID: req.body.teamID}
    let member = { $push: { teamMember:{employeeID: req.body.employeeID} } };

    Teams.findOneAndUpdate(query, member, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "new employee added to team"
            });
        } 
    });
}

handleRemoveOneMember = (req, res, next) => {
    let query = {teamID: req.body.teamID}
    let member = { $pull: { teamMember:{employeeID: req.body.employeeID} }};

    Teams.findOneAndUpdate(query, member, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "employee removed from team"
            });
        } 
    });
}

module.exports = { handleJobUpdate, handleAddOneMember, handleRemoveOneMember }