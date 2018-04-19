var express = require('express');
var router = express.Router();
var update = require('../../controllers/jobs/update');

router.post('/', function(req, res, next){
    update.handleJobUpdate(req, res, next);
});

router.post('/approve', function(req, res, next){
    update.handleJobApprove(req, res, next);
});

router.post('/assign', function(req, res, next){
    update.handleJobAssign(req, res);
});


module.exports = router;
