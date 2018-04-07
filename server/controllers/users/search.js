const Employee = require('../../model/Employee');
const Teams = require('../../model/Teams');

handleStaffSearch= (req, res, next) => {
    let query = {staffID: req.body.staffID}

    Employee.find(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            let data = JSON.parse(JSON.stringify(callback));
            query = {teamID: data[0].teamID};
            Teams.findOne(query, (err, callback) => 
            {
                if (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                } else {
                    let managerID = JSON.parse(JSON.stringify(callback)).managerID;
                    let idJson = {"managerID":managerID};
                    data.push(idJson);
                    res.json({
                        success: true,
                        data: data
                    });
                }
            });
        }
    });
}

module.exports = { handleStaffSearch }