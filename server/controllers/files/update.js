const Jobs = require('../../model/Jobs')
const Files = require('../../model/Files')

handleRatingUpdate = (req, res, next) => {
    let query = {fileID: req.body.fileID}
    let update = { $set: {rating: req.body.rating } }
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
}

module.exports = { handleRatingUpdate }