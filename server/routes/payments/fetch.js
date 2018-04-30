var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/payments/fetch')


router.get('/', function(req, res, next){
    fetch.fetchPaymentsWithFilter(req, res, next);
});

router.get('/client', function(req, res) {
    fetch.fetchPaymentsByClient(req, res);
});


module.exports = router;
