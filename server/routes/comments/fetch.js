var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/comments/fetch')


router.get('/', function(req, res, next){
    fetch.handleCommentsFetch(req, res, next);
});

router.get('/jobid', function(req, res, next){
    fetch.handleCommentsFetchByJobID(req, res, next);
});

router.get('/teamid', function(req, res, next){
    fetch.handleCommentsFetchByTeamID(req, res, next);
});


module.exports = router;
