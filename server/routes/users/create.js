var express = require('express');
var router = express.Router();
var create = require('../../controllers/users/create')
const multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/employees')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.png')
  }
})

let clientStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/clients')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.png')
  }
})

let clientUpload = multer({storage: clientStorage})
let upload = multer({storage: storage})

router.post('/employee', upload.single('photo'), function(req, res, next){
    create.handleEmployeeCreate(req, res, next);
});

router.post('/client', clientUpload.single('photo'), function(req, res, next){
  create.handleClientRegister(req, res, next);
});

module.exports = router;
