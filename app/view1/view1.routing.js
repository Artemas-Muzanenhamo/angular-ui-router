angular
    .module('myApp.view1')
    .config(($stateProvider) => {
        $stateProvider.state('view1State', {
            name: 'view1',
            url: '/view1',
            // template: '<h2>Hello World From View 1</h2>',
            template: '<sub-view></sub-view>',
            // templateUrl: "'app/view1/sub-view/sub-view.html'"
            // views: {
            //     'main@subview': {
                    // templateUrl: 'app/view1/sub-view/sub-view.html'
                    // template: '<sub-view></sub-view>'
                // }
            // }

        });
    });