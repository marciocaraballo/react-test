var express = require('express'),
	router = express.Router(),
	File = require('../models/file');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;