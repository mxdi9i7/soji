var express = require('express');
var router = express.Router();
var update = require('../../controllers/teams/update')


router.post('/', function(req, res, next){
    update.handleJobUpdate(req, res, next);
});

module.exports = router;