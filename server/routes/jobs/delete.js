var express = require('express');
var router = express.Router();
var deletes = require('../../controllers/jobs/delete');
// 用delete会报错
var deleteTask = require('../../controllers/tasks/delete');

router.post('/', function(req, res, next){
    deletes.deleteJob(req, res, next);
    deleteTask.deleteTaskByJob(req, res, next);
});

module.exports = router;
