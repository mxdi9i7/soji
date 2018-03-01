var express = require('express');
var router = express.Router();
var create = require('../../controllers/files/create')


router.post('/', function(req, res, next){
    create.handleFileCreate(req, res, next);
});

module.exports = router;
