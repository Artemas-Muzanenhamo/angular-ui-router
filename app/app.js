'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
