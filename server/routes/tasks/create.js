var express = require('express');
var router = express.Router();
var create = require('../../controllers/tasks/create')


router.post('/', function(req, res, next){
    create.handleTaskCreate(req, res, next);
});

module.exports = router;
