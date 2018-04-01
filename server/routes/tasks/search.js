var express = require('express');
var router = express.Router();
var search = require('../../controllers/tasks/search')


router.post('/', function(req, res, next){
    search.handleTaskSearchByJobID(req, res, next);
});

module.exports = router;
