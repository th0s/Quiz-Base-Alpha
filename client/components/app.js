angular.module('quiz-base-alpha', [])
  .component('app', {
    bindings: {
      services: '<'
    },

    templateUrl: 'client/templates/app.html',
    controller: 'AppController'
  })
  .controller('AppController', function($http, dbquery) {

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
      var mockUserData = {
        username: 'test',
        score: 3
      };
      console.log(userData, 'This is from sendDATA');
      $http.post('http://127.0.0.1:1337', mockUserData).then(function({ data }) {
        console.log('Success!', data);
      })
        .catch(function(err) {
          if (err) {
            console.error('Get Request Error!', err);
          }
        });
    };
  });