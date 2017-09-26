angular.module('quiz-base-alpha', [])
  .component('app', {
    templateUrl: 'client/templates/app.html',
    controller: 'AppController'
  })
  .controller('AppController', function($scope) {
    var score = 0;
    this.score = function() {
      console.log('works');
    };
  });