var express = require('express');
var router = express.Router();
var search = require('../../controllers/users/search');

router.post('/', function(req, res, next){
    search.handleStaffSearch(req, res, next);
});

module.exports = router;
