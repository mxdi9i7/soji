var express = require('express');
var router = express.Router();
var update = require('../../controllers/teams/update')


router.post('/', function(req, res, next){
    update.handleJobUpdate(req, res, next);
});

router.post('/add', function(req, res, next){
    update.handleAddOneMember(req, res, next);
});

router.post('/remove', function(req, res, next){
    update.handleRemoveOneMember(req, res, next);
});

router.post('/promote', (req, res) => {
    update.handlePromotion(req, res)
})

module.exports = router;
