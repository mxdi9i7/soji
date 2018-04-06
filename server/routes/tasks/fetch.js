var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/tasks/fetch')


router.get('/', function(req, res, next){
    fetch.handleTasksFetch(req, res, next);
});

router.get('/list', function(req, res, next) {
    fetch.getTasksByJobID(req, res, next)
})

router.get('/single', function(req, res, next) {
    fetch.getTaskByTaskID(req, res, next)
})

module.exports = router;
