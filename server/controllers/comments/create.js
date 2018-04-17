const Comments = require('../../model/Comments');


handleCommentCreate = (req, res, next) => {
    let commentsArray;
    let submissionID;

    Comments.distinct('submissionID', (err, callback) =>
    {
        commentsArray = callback;
    }).then(function(){
        do {
            submissionID = String(parseInt(Math.random()*100000000));
            while (submissionID.length < 8)
            {
                submissionID = '0' + submissionID;
            }
        }
        while (JSON.stringify(commentsArray).indexOf(submissionID) != -1);

        let newComment = new Comments
        ({
            submissionID: submissionID,
            content: req.body.content,
            fileID: req.body.fileID,
            authorID: req.body.authorID,
            createdAt: new Date()
        });
        newComment.save((err, callback) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json({
                    success: true,
                    message: "Comment created"
                });
            } 
        });
    });
}

module.exports = { handleCommentCreate }