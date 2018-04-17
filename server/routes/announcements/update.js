var express = require('express');
var router = express.Router();
var update = require('../../controllers/announcements/update');

router.post('/', function(req, res, next){
    update.handleAnnouncementUpdate(req, res, next);
});


module.exports = router;
