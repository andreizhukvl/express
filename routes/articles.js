var express = require('express');
var router = express.Router();
var http = require('https');
var mongoose = require('mongoose');
var multer  = require('multer');
var path = require('path');
var upload = multer({ dest: 'uploads/' });
var Schema = mongoose.Schema;
const ARTICLE_SCHEMA = 
    {
      title: String,
      author: String,
      body: String,
      description: String,
      image_path: String,
      comments: [{ body: String, date: Date }],
      date: { type: Date, default: Date.now }
    };
var Article = mongoose.model('Article', ARTICLE_SCHEMA);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

var upload = multer({ storage: storage });

/* GET articles. */
router.get('/', function(req, res, next) {
  var db = mongoose.connect('mongodb://admin:admin@ds033066.mlab.com:33066/blog');

  Article.find({}, function(err, docs) {
    //res.render('articles', { data: docs });
    res.json(docs);
    db.disconnect();
  });
});

router.get('/article', function(req, res, next) {
  var db = mongoose.connect('mongodb://admin:admin@ds033066.mlab.com:33066/blog');

  Article.find({ _id: req.query._id }, function(err, docs) {
    //res.render('articles', { data: docs });
    res.json(docs[0]);
    db.disconnect();
  });
});

router.get('/add', function(req, res, next) {
  res.render('add-article');
});

router.post('/add', upload.single('displayImage'), function(req, res, next) {
  var db = mongoose.connect('mongodb://admin:admin@ds033066.mlab.com:33066/blog');
  
  var article = new Article(
    {
      title : req.body.title,
      body : req.body.text,
      description : req.body.description,
      image_path : req.file != null ? "images/" + req.file.filename : null
    }
  );
  article.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('saved');
      res.json({success: true});
    }

    db.disconnect();
  });
});

router.post('/edit', upload.single('displayImage'), function(req, res, next) {
  var db = mongoose.connect('mongodb://admin:admin@ds033066.mlab.com:33066/blog');

  Article.findById(req.body._id, function(err, article) {
    if (!article) {
      return new Error("Article wasn't found");
    }
    else {
      article.title = req.body.title;
      article.body = req.body.text;
      article.description = req.body.description;

      article.save(function (err) {
        if (err) {
          console.log(err);
          res.json({success: false});
        } else {
          console.log('saved');
          res.json({success: true});
        }

        db.disconnect();
      });
    }
  });
});

module.exports = router;
