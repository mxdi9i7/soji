const Files = require('../../model/Files')

handleFileDelete = (req, res, next) => {
    let query = {fileID: req.body.fileID}
    Files.deleteMany(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "File deleted"
            });
        } 
    });
}

module.exports = { handleFileDelete }