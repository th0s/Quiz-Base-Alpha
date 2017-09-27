var express = require('express');
var path = require('path');
var app = express();
var db = require('./client/db/database.js');
var Sequelize = require('sequelize');
var db = new Sequelize('data', 'root', null, { host: 'localhost', dialect: 'mysql'});
var bodyParser = require('body-parser');


var hold = app.use(express.static(path.join(__dirname, '/')));
var templates = app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(1337, function() {
  console.log('QBA listening on port 1337...');
});


var Username = db.define('leadinfo', {
  username: Sequelize.STRING,
  score: Sequelize.INTEGER
});

app.get('/', function(req, res) {
  db.query('SELECT * FROM leadinfos', {type: db.QueryTypes.SELECT})
    .then(users => {
      console.log(users);
    });
});

app.get('/userData', function(req, res) {
  db.query('SELECT * FROM leadinfos', {type: db.QueryTypes.SELECT})
    .then(users => {
      res.send(users);
      console.log(users, 'this is all the users');
    });
});

app.post('/', function(req, res) {
  Username.create({
    username: req.body.username,
    score: req.body.score
  })
    .then(users => {
      res.status(201).send(req.body);
    });

});
