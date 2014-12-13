define(['app'], function (app) {
    app.module1.config(['$routeProvider', 'MyTestProvider', function($routeProvider, myTestProvider) {
        
        // configure the myTestProvider.
        myTestProvider.setType("Puzzle");
            
        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controller: 'HomeController',
            controllerUrl: 'app/home' // you don't need this line actually.
        });

        $routeProvider.when('/view-factory', {
            templateUrl: 'view/view1.html',
            controller: 'ViewUserFactoryController',
            controllerUrl: 'app/view' // you don't need this line actually.
        });
        
        $routeProvider.when('/view-service', {
            templateUrl: 'view/view1.html',
            controller: 'ViewUserServiceController',
            controllerUrl: 'app/view' // you don't need this line actually.
        });

        //$routeProvider.otherwise({redirectTo: '/home'});
    }]);
});