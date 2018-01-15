var express = require('express');
var router = express.Router();
var update = require('../../controllers/tasks/update')


router.post('/', function(req, res, next){
    update.updateTask(req, res, next);
});

module.exports = router;
