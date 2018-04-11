var express = require('express');
var router = express.Router();
var create = require('../../controllers/tasks/create')
const multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/files')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.png')
  }
})
let upload = multer({storage: storage})

router.post('/', upload.any(), function(req, res, next){
    create.handleTaskCreate(req, res, next);
});

module.exports = router;
