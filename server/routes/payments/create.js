var express = require('express');
var router = express.Router();
var create = require('../../controllers/payments/create');

router.post('/', function(req, res, next){
    create.handlePaymentCreate(req, res, next);
});

module.exports = router;
