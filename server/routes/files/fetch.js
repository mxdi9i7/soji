var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/files/fetch')


router.get('/', function(req, res, next){
    fetch.handleFilesFetch(req, res, next);
});

module.exports = router;
