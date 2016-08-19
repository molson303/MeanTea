var app = angular.module('meanTea', ['ngRoute']);
app.config (function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainController'
    })
    .when('/new', {
      templateUrl: 'templates/caffeineMeter.html',
      controller: ''
    })
    .otherwise('/');
}) 
