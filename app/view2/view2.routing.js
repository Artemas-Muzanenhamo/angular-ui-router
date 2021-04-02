angular.module('myApp.view2')
    .config(($stateProvider) => {
        $stateProvider.state('view2State', {
            name: 'view2',
            url: '/view2',
            template: '<h2>Greetings Earthling, this is View 2 </h2>'
        });
    });