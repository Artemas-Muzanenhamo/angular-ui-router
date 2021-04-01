'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.hashPrefix('');

    let helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h2>Hello World</h2>'
    };

    $stateProvider.state(helloState);
}]);
