var express = require('express');
var path = require('path');
var app = express();

var hold = app.use(express.static(path.join(__dirname, '/')));
var templates = app.use(express.static(path.join(__dirname, 'client')));

app.listen(1337, function() {
  console.log('QBA listening on port 1337...');
});

app.get('/', function(req, res) {
});

app.post('/', function(req, res) {
  console.log('works');
});
