var express = require('express');
var router = express.Router();
var update = require('../../controllers/users/update');

router.post('/', function(req, res, next){
    update.handleEmployeeUpdate(req, res, next);
});

router.post('/rating', function(req, res, next){
    update.handleEmployeeRatingUpdate(req, res, next);
});

module.exports = router;
