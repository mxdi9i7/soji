var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/announcements/fetch')


router.get('/', function(req, res, next){
    fetch.handleAnnouncementsFetch(req, res, next);
});


module.exports = router;