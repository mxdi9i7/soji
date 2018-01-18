var express = require('express');
var router = express.Router();
var { handleUserLogin } = require('../controllers/users/auth')
/* GET users listing. */
router.get('/', function(req, res, next) {
  handleUserLogin(req, res, next)
});

module.exports = router;
