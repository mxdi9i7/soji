var express = require('express');
var router = express.Router();
var create = require('../../controllers/jobs/create')


router.post('/', function(req, res, next){
    create.createJob(req, res, next);
});

module.exports = router;
