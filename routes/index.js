var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '12323123123' });
});
router.get('/fuck', function(req, res, next) {
  res.sendFile('/Users/Moon/www/h5/cat.html');
});


module.exports = router;
