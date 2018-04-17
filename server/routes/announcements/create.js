var express = require('express');
var router = express.Router();
var create = require('../../controllers/announcements/create');

router.post('/', function(req, res, next){
    create.handleAnnouncementCreate(req, res, next);
});

module.exports = router;
