var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/tasks/fetch')


router.get('/', function(req, res, next){
    fetch.handleTasksFetch(req, res, next);
});

module.exports = router;
