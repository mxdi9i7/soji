const Teams = require('../../model/Teams')


handleTeamCreate = (req, res, next) => {
    let teamsArray;
    let teamID;

    Teams.distinct('teamID', (err, callback) =>
    {
        teamsArray = callback;
    }).then(function(){
        do {
            teamID = String(parseInt(Math.random()*1000000));
            while (teamID.length < 6)
            {
                teamID = '0' + teamID;
            }
        }
        while (JSON.stringify(teamsArray).indexOf(teamID) != -1);

        let newTeam = new Teams
        ({
            teamID: teamID,
            teamName: req.body.teamName,
            managerID: req.body.managerID,
            teamMember: req.body.teamMember,
            creationDate: new Date()
        });
        newTeam.save((err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json({
                    success: true,
                    message: "Team created"
                });
            } 
        });
    });
}

module.exports = { handleTeamCreate }