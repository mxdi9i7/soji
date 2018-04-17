const Comments = require('../../model/Comments')

handleCommentSearchByAuthor= (req, res, next) => {
    let query = {authorID:req.body.authorID}

    Comments.find(query, (err, callback) =>
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

handleCommentSearchByFileID= (req, res, next) => {
    let query = {fileID:req.query.fileID}

    Comments.find(query, (err, callback) =>
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

module.exports = { handleCommentSearchByAuthor, handleCommentSearchByFileID }