var express = require('express');
var router = express.Router();
var search = require('../../controllers/announcements/search');

router.post('/', function(req, res, next){
    search.handleAnnouncementSearchByID(req, res, next);
});


module.exports = router;
