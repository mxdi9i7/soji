var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/jobs/fetch')


router.get('/', function(req, res, next){
    fetch.fetchJobsWithFilter(req, res);
});

module.exports = router;
