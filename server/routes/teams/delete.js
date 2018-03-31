var express = require('express');
var router = express.Router();
var deletes = require('../../controllers/teams/delete');
// 用delete会报错

router.post('/', function(req, res, next){
    deletes.handleTeamDelete(req, res, next);
});

module.exports = router;
