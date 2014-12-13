define([
    'angular',
    'angular-route',
    'jquery'
], function (ng,ngRoute,$) {
    'use strict';
    console.log($('h1').length);
    
    //Modules define applications. All application controllers should belong to a module.
    //Modules make your application more readable, and keep the global namespace clean.
    //You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.
    //Global values should be avoided in applications. They can easily be overwritten or destroyed by other scripts.
    //AngularJS modules can solve (or reduce) this problem.
    //
    // For multile modules retrun.
    return {
        module1:ng.module('myApp', ['ngRoute']),
        module2:ng.module('myApp2', [])
    }; 
    
    //For single module retrun.
    //return ng.module('myApp', ['ngRoute']);

});

/*
define([
    'angular',
    'angular-route',
    'jquery'
], function (ng,ngRoute,$) {
    'use strict';
    console.log($('h1').length);
    
    return ng.module('app', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
            
            $routeProvider.when('/home', {
                templateUrl: 'view/home.html',
                controller: 'HomeCtrl',
                controllerUrl: 'app/home'
            });

            $routeProvider.when('/view1', {
                templateUrl: 'view/view1.html',
                controller: 'View1Ctrl',
                controllerUrl: 'app/view'
            });

            //$routeProvider.otherwise({redirectTo: '/home'});
    }]); 

});


define([
    'angular',
    'angular-route',
    'jquery'
], function (ng,ngRoute,$) {
    'use strict';
    console.log($('h1').length);
    
    return ng.module('app', ['ngRoute']).
        config(['$routeProvider', function($routeProvider) {
            
            $routeProvider.when('/home', {
                templateUrl: 'view/home.html',
                controller: 'HomeCtrl',
                //controllerUrl: 'app/home'
            });

            $routeProvider.when('/view1', {
                templateUrl: 'view/view1.html',
                controller: 'View1Ctrl',
                //controllerUrl: 'app/view'
            });

            //$routeProvider.otherwise({redirectTo: '/home'});
    }]).controller('HomeCtrl', function ($scope) {
        $scope.message = "Message from HomeCtrl"; 
    }).controller('View1Ctrl', function ($scope) {
        $scope.message = "Message from View1Ctrl"; 
    }); 
});
*/