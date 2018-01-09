var express = require('express');
var router = express.Router();
var user = require('../controllers/users/auth')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next){
  user.clientLogin(req, res, next);
});

router.post('/staffLogin', function(req, res, next){
  user.staffLogin(req, res, next);
});

router.post('/register', function(req, res, next){
  user.register(req, res, next);
});

module.exports = router;
