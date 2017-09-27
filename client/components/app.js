angular.module('quiz-base-alpha', [])
  .component('app', {
    bindings: {
      services: '<'
    },

    templateUrl: 'client/templates/app.html',
    controller: 'AppController'
  })
  .controller('AppController', function($http, dbquery) {
    this.data = [];
    this.test = function() {
      console.log(this.data[0]);
    };
    this.leaderData = {
      username: 'asd',
      score: 0
    };

    this.getData = function() {
      $http.get('http://127.0.0.1:1337/userData').then(({ data }) => {
        this.data.push(data);
      });
    };

    var inputData = {
      username: '',
      score: 0
    };

    this.myFunc = function (value) {
      inputData.score += 3;
      console.log(inputData);
    };

    this.submit = function() {
      if (this.username) {
        inputData.username = this.username;
        this.sendData(inputData);
        console.log(inputData);
      } else {
        alert('Please enter a username.');
      }
    };

    this.sendData = function(userData) {
      $http.post('http://127.0.0.1:1337', userData).then(function({ data }) {
        console.log('Success!', data);
      })
        .catch(function(err) {
          if (err) {
            console.error('Get Request Error!', err);
          }
        });
    };
  });