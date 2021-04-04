angular.module('myApp.subView')
    .component('subView', {
        // templateUrl: 'app/view1/sub-view/sub-view.html',
        template: '<h3>Hello From SubView</h3>',
        controller: SubViewController,
        controllerAs: 'ctrl'
    });

function SubViewController() {}
