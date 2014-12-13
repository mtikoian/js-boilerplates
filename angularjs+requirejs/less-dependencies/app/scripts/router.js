define(['app'], function (app) {
    app.module1.config(['$routeProvider', function($routeProvider) {
            
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerUrl: 'app/home' // you don't need this line actually.
        });

        $routeProvider.when('/view1', {
            templateUrl: 'views/view1.html',
            controller: 'View1Controller',
            controllerUrl: 'app/view' // you don't need this line actually.
        });

        //$routeProvider.otherwise({redirectTo: '/home'});
    }]);
});