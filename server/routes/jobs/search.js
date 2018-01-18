var express = require('express');
var router = express.Router();
var search = require('../../controllers/jobs/search')


router.post('/', function(req, res, next){
    search.searchJob(req, res, next);
});

module.exports = router;
