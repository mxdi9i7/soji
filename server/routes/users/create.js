var express = require('express');
var router = express.Router();
var create = require('../../controllers/users/create')


router.post('/', function(req, res, next){
    create.createStaff(req, res, next);
});

module.exports = router;
