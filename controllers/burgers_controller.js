// Inside your burger directory, create a folder named controllers.
// In controllers, create the burgers_controller.js file.





// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
var express = require('express');
var burger  = require('../models/burger');

// Create the router for the app, and export the router at the end of your file.

var router  = express.Router();

// Routes

// index
router.get('/', function (req, res) {
  res.redirect('/index');
});


// home
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    res.render('index', {burgers: data});
  });
});


// Add burger to wishlist
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});


// Add burger to eaten list
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

// Export router
module.exports = router;
