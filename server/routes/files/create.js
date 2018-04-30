var express = require('express');
var router = express.Router();
var create = require('../../controllers/files/create');
const multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/files')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + file.mimetype.split('/')[1])
  }
})
let upload = multer({storage: storage})


router.post('/', upload.single('file'), function(req, res, next){
    create.handleFileCreate(req, res, next);
});

module.exports = router;
