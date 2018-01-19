var express = require('express');
var router = express.Router();
var deletes = require('../../controllers/tasks/delete');
// 用delete会报错

router.post('/', function(req, res, next){
    deletes.handleTaskDelete(req, res, next);
});

module.exports = router;
