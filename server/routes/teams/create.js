var express = require('express');
var router = express.Router();
var create = require('../../controllers/teams/create')


router.post('/', function(req, res, next){
    create.handleTeamCreate(req, res, next);
});

module.exports = router;
