var express = require('express');
var router = express.Router();
var deletes = require('../../controllers/comments/delete');

router.post('/submissionid/', function(req, res, next){
    deletes.handleCommentDeleteBySubmissionID(req, res, next);
});

router.post('/fileid/', function(req, res, next){
    deletes.handleCommentDeleteByFileID(req, res, next);
});

module.exports = router;
