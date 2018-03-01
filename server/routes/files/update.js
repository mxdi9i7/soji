var express = require('express');
var router = express.Router();
var create = require('../../controllers/files/update')


router.post('/', function(req, res, next){
    create.handleFileUpdate(req, res, next);
});

module.exports = router;
