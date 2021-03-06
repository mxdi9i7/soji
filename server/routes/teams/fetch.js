var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/teams/fetch')


router.get('/', function(req, res, next){
    fetch.handleTeamsFetch(req, res, next);
});

router.get('/single', function(req, res, next){
    fetch.fetchSingleTeam(req, res);
});


module.exports = router;
