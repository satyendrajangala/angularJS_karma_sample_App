'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
 'UserModule',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/users'});
}]);
