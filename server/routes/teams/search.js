var express = require('express');
var router = express.Router();
var search = require('../../controllers/teams/search')


router.post('/', function(req, res, next){
    search.handleTeamSearchByID(req, res, next);
});

module.exports = router;
