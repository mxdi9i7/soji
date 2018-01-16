var express = require('express');
var router = express.Router();
var update = require('../../controllers/jobs/update');

router.post('/', function(req, res, next){
    update.updateJob(req, res, next);
});

module.exports = router;
