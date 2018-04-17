var express = require('express');
var router = express.Router();
var create = require('../../controllers/files/update')


router.post('/rating', function(req, res, next){
    create.handleRatingUpdate(req, res, next);
});

module.exports = router;
