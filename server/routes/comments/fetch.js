var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/comments/fetch')


router.get('/', function(req, res, next){
    fetch.fetchCommentsWithFilter(req, res, next);
});


module.exports = router;
