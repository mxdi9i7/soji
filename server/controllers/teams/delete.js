const Teams = require('../../model/Teams')


handleTeamDelete = (req, res, next) => {
    let query = {teamID: req.body.teamID}
    Teams.deleteMany(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Team deleted"
            });
        } 
    });
}


module.exports = { handleTeamDelete }