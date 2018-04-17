const Comments = require('../../model/Comments');


handleCommentCreate = (req, res, next) => {
    let newComment = new Comments
    ({
        content: req.body.content,
        fileID: req.body.fileID,
        authorRole: req.body.author,
        createdAt: new Date()
    });
    newComment.save((err, callback) => {
        if (err) {
            res.json({
                success: false,
                data: err
            });
        } else {
            res.json({
                success: true,
                data: "Comment created"
            });
        } 
    });
}

module.exports = { handleCommentCreate }