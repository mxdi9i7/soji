var express = require('express');
var router = express.Router();
var create = require('../../controllers/comments/create');

router.post('/', function(req, res, next){
    create.handleCommentCreate(req, res, next);
});

module.exports = router;
