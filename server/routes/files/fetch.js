var express = require('express');
var router = express.Router();
var fetch = require('../../controllers/files/fetch')


router.get('/', function(req, res, next){
    fetch.fetchFiles(req, res);
});

router.get('/aggregate', (req, res) => {
    fetch.aggregateFiles(req, res)
})

router.get('/month', (req, res, next) => {
    fetch.handleFilesByMonth(req, res, next)
})

router.get('/single', (req, res) => {
    fetch.handleSingleFile(req, res)
})

router.get('/recent', (req, res) => {
    fetch.handleFilesByClientID(req, res)
})

module.exports = router;
