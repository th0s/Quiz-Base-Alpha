angular.module('video-player')
  .service('youTube', function($window, $http) {
    this.search = function(query, callback) {
      $http.get('127.0.0.1:1337', {

      })

        .then(function({ data }) {
          if (callback) {
            console.log('Success!');
            callback(data.items);
          }
        })
        .catch(function() {
          console.log('Get Request Error!');
        });
    };
  });
