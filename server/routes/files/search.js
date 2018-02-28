var express = require('express');
var router = express.Router();
var create = require('../../controllers/files/search')


router.post('/name', function(req, res, next){
    create.handleFileSearchByTitle(req, res, next);
});

router.post('/taskID', function(req, res, next){
    create.handleFileSearchByTaskID(req, res, next);
});

router.post('/jobID', function(req, res, next){
    create.handleFileSearchByJobID(req, res, next);
});

module.exports = router;
