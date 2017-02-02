var express = require('express');
var router = express.Router();

/* GET news. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/news.html');
});

module.exports = router;