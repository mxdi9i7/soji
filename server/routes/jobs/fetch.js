var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/jobs/fetch')


router.get('/', function(req, res, next){
    fetch.fetchJobsWithFilter(req, res);
});

router.get('/client', function(req, res, next){
    fetch.fetchJobListByClient(req, res);
});

router.get('/single', function(req, res, next) {
    fetch.fetchJob(req, res)
})

router.get('/team', (req, res) => {
    fetch.fetchJobsByTeamID(req, res)
})

router.get('/title', (req, res) => {
    fetch.fetchJobListByTitle(req, res)
})

module.exports = router;
