var express = require('express');
var router = express.Router();
var http = require('https');
var mongoose = require('mongoose');
var multer  = require('multer');
var path = require('path');
var upload = multer({ dest: 'uploads/' });
var Schema = mongoose.Schema;



/* GET articles. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

module.exports = router;
