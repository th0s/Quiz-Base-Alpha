var mysql = require('mysql');

let dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'data',
});

dbConnection.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected!');
});

module.exports = dbConnection;