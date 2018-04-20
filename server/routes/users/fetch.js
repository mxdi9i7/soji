var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/users/fetch');

router.get('/employee', function(req, res, next){
    fetch.handleEmployeeFetch(req, res, next);
});

router.get('/employee/single', (req, res) => {
    fetch.fetchSingleEmployee(req, res)
})

router.get('/client/single', (req, res) => {
    fetch.fetchSingleClient(req, res)
})

module.exports = router;
