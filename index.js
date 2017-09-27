var express = require('express');
var path = require('path');
var app = express();
var db = require('./client/db/database.js');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });
var bodyParser = require('body-parser');


var hold = app.use(express.static(path.join(__dirname, '/')));
var templates = app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(1337, function() {
  console.log('QBA listening on port 1337...');
});

var Username = sequelize.define('Username', {
  username: Sequelize.STRING,
  username: Sequelize.INTEGER
}, {
  tablename: 'leadinfo'
});

app.get('/', function(req, res) {
  sequelize.query('SELECT * FROM leadinfo', {type: sequelize.QueryTypes.SELECT})
    .then(users => {
      console.log(users);
    });
});

app.post('/', function(req, res) {
  sequelize.query('SELECT * FROM leadinfo', {type: sequelize.QueryTypes.SELECT})
    .then(users => {
      console.log(users, ' This worked!');
    });
  // sequelize.query("insert into leadinfo(username, score) values(req.body.username, req.body.score);", {type: sequelize.QueryTypes.SELECT})
  // .then(users => {
  //   console.log(users)
  // })
  res.status(201).send(req.body);
});
