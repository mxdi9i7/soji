const Teams = require('../../model/Teams')
const Employee = require('../../model/Employee')
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
    let member = { $push: { teamMember: req.body.employeeID } };

    Teams.findOne({teamID: req.body.teamID}, (err, team) => {
        const members = team.teamMember;
        if (members.includes(req.body.employeeID)) {
            res.json({
                success: false,
                data: "Employee is already in this team"
            })
        } else {
            Employee.findOneAndUpdate({employeeID: req.body.employeeID},{
                teamID: team.teamID
            }, (err, employee) => {
                Teams.findOneAndUpdate(query, member, (err, updatedTeam) => {
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
            })
        }
    })
}

handleRemoveOneMember = (req, res, next) => {
    let query = {teamID: req.body.teamID}
    let member = { $pull: { teamMember: req.body.employeeID }};
    Teams.findOneAndUpdate(query, member, (err, callback) => {
        Employee.findOneAndUpdate({employeeID: req.body.employeeID}, {teamID: ""}, (err, employee) => {
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
        })
    });
}

handlePromotion = (req, res) => {
    const {employeeID, teamID} = req.body
    Teams.findOneAndUpdate({teamID}, {managerID: employeeID}, (err, team) => {
        const oldManager = team.managerID
        Employee.findOneAndUpdate({employeeID: oldManager}, {isManager: false}, (err, oldEmployee) => {
            Employee.findOneAndUpdate({employeeID}, {isManager: true}, (err, employee) => {
                if (err) {
                    res.json({
                        success: false,
                        data: err
                    })
                } else {
                    res.json({
                        success: true,
                        data: "Employee promoted!"
                    })
                }
            })
        })
    })
}

module.exports = { handlePromotion, handleJobUpdate, handleAddOneMember, handleRemoveOneMember }