var express = require('express');
var router = express.Router();
var auth = require('../../controllers/users/auth')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next){
  auth.handleClientLogin(req, res, next);
});

router.post('/staffLogin', function(req, res, next){
  auth.handleStaffLogin(req, res, next);
});

router.post('/register', function(req, res, next){
  auth.handleClientRegister(req, res, next);
});

module.exports = router;
