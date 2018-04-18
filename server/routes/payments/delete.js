var express = require('express');
var router = express.Router();
var deletes = require('../../controllers/payments/delete')


router.post('/', function(req, res, next){
    deletes.handlePaymentDelete(req, res, next);
});

module.exports = router;
