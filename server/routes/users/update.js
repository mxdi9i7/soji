var express = require('express');
var router = express.Router();
var update = require('../../controllers/users/update');

router.post('/', function(req, res, next){
    update.handleStaffUpdate(req, res, next);
});

router.post('/rating', function(req, res, next){
    update.handleStaffRatingUpdate(req, res, next);
});

module.exports = router;