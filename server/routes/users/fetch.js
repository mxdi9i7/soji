var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/users/fetch');

router.get('/employee', function(req, res, next){
    fetch.handleStaffFetch(req, res, next);
});

module.exports = router;
