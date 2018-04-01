var express = require('express');
var router = express.Router();
var search = require('../../controllers/jobs/search')


router.post('/title/', function(req, res, next){
    search.handleJobSearchByTitle(req, res, next);
});

router.post('/teamID/', function(req, res, next){
    search.handleJobSearchByTeamID(req, res, next);
});

module.exports = router;
