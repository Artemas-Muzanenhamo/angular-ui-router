// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'myApp.subView',
    'myApp.version'
]).config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
