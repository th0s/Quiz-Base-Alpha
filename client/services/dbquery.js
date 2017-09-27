angular.module('quiz-base-alpha')
  .service('dbquery', function($window, $http) {
    this.service = function(callback) {
      $http.post('http://127.0.0.1:1337', {
        url: '/'
      }).then(function({ data }) {
        if (callback) {
          console.log(data);
          callback(data.items);
        }
      })
        .catch(function(err) {
          if (err) {
            console.error('Get Request Error!', err);
          }
        });
    };
  });
