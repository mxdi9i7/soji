var express = require('express');
var router = express.Router();
var deletes = require('../../controllers/announcements/delete');

router.post('/', function(req, res, next){
    deletes.handleAnnouncementDeleteByID(req, res, next);
});


module.exports = router;
