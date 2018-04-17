const Comments = require('../../model/Comments')

handleCommentDeleteByFileID = (req, res, next) => {
    let query = {fileID: req.body.fileID}
    Comments.deleteMany(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Comments deleted"
            });
        } 
    });
}

handleCommentDeleteBySubmissionID = (req, res, next) => {
    let query = {submissionID: req.body.submissionID}
    Comments.deleteMany(query, (err, callback) =>
    {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "One comment deleted"
            });
        } 
    });
}

module.exports = { handleCommentDeleteByFileID, handleCommentDeleteBySubmissionID }