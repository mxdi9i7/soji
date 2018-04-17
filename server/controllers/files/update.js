const Jobs = require('../../model/Jobs')
const Files = require('../../model/Files')

handleRatingUpdate = (req, res, next) => {
    let query = {fileID: req.body.fileID}

    Files.findOne(query, (err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            let jobQuery = {jobID: callback.jobID}
            Jobs.findOne(jobQuery, { item: 1, clientID: 1 }, (err, callback) => {
                if (err) {
                    res.json({
                        success: false,
                        data: err
                    });
                } else {
                    if(callback.clientID == req.body.clientID) {
                        let update = { $set:
                            {
                              rating: req.body.rating
                            }
                         }
                        Files.updateOne(query, update, (err, callback) => {
                            if (err) {
                                res.json({
                                    success: false,
                                    data: err
                                });
                            } else {
                                res.json({
                                    success: true,
                                    data: "rating updated"
                                });
                            }
                        })
                    } else {
                        res.json({
                            success: false,
                            data: "client ID does not match"
                        });
                    }
                }
            });
        } 
    });

}

module.exports = { handleRatingUpdate }