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
let upload = multer({storage: storage})

router.post('/employee', upload.single('photo'), function(req, res, next){
    create.handleStaffCreate(req, res, next);
});

module.exports = router;
