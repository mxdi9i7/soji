var express = require('express');
var router = express.Router();
var {exampleFunction, function2} = require('../controllers/getAllUser');

/* GET home page. */
router.get('/', function(req, res, next) {
  exampleFunction()
  function2()
  res.render('index', { title: 'Express' });
});

module.exports = router;
