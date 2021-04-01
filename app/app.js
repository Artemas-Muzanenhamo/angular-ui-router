'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
    $locationProvider.hashPrefix('');

    let view1State = {
        name: 'view1',
        url: '/view1',
        template: '<h2>Hello World From View 1</h2>'
    };

    let view2State = {
        name: 'view2',
        url: '/view2',
        template: '<h2>Greetings Earthling, this is View 2 </h2>'
    };

    $stateProvider.state(view1State);
    $stateProvider.state(view2State);
}]);
