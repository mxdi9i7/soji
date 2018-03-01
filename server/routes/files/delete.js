var express = require('express');
var router = express.Router();
var create = require('../../controllers/files/delete')


router.post('/', function(req, res, next){
    create.handleFileDelete(req, res, next);
});

module.exports = router;
