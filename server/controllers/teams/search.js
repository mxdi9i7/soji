const Teams = require('../../model/Teams')

handleTeamSearchByID= (req, res, next) => {
    let teamID = req.body.teamID;
    Teams.find({teamID:teamID}, (err, callback) =>
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

module.exports = { handleTeamSearchByID }