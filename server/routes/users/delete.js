var express = require('express');
var router = express.Router();
var deletes = require('../../controllers/users/delete');
// delete会报错........................

router.post('/', function(req, res, next){
    deletes.handleEmployeeDelete(req, res, next);
});

module.exports = router;
