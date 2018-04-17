var express = require('express');
var router = express.Router();
var search = require('../../controllers/comments/search');

router.post('/author/', function(req, res, next){
    search.handleCommentSearchByAuthor(req, res, next);
});

router.post('/fileid/', function(req, res, next){
    search.handleCommentSearchByFileID(req, res, next);
});

module.exports = router;
