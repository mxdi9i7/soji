var express = require('express');
var router = express.Router();
var auth = require('../../controllers/users/auth')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/clientLogin', auth.token_status, function(req, res, next){
  auth.handleClientLogin(req, res, next);
});

router.post('/employeeLogin', auth.token_status, function(req, res, next){
  auth.handleEmployeeLogin(req, res, next);
});

router.post('/adminLogin', auth.token_status, function(req, res, next){
  auth.handleAdminLogin(req, res, next);
});

router.post('/register', function(req, res, next){
  auth.handleClientRegister(req, res, next);
});

router.post('/check', function(req, res, next) {
  auth.checkIdentity(req, res, next)
})
module.exports = router;
