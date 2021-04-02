angular
    .module('myApp.view1')
    .config(($stateProvider) => {
        $stateProvider.state('view1State', {
            name: 'view1',
            url: '/view1',
            template: '<h2>Hello World From View 1</h2>'
        })
    });