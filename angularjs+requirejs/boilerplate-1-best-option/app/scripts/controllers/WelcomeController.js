// For multile modules access.
define(['app'], function (app) {
    app.module1.controller('WelcomeController', ['$scope','MyTest', function($scope, myTest) { 
        //your minsafe code
        $scope.message = "Message from WelcomeController"; 
        console.log($scope.message);
        console.log(myTest.getType());
        console.log(myTest.title);
    }]);
});

/*
 * However in Angular you just registered 'myAppModule1' in the Angular global. There is no need to do the object return, you can retrieve the registered module using the angular object:
 */

/*
define(['angular','app'], function (angular) {
    var myAppModule = angular.module('myApp');
    myAppModule.controller('welcomeController', ['$scope', function($scope) { 
        //your minsafe controller 
        $scope.message = "Message from WelcomeController"; 
    }]);
});
*/

/* 
 * For single module access.
 */
/*
define(['app'], function (app) {
    app.controller('welcomeController', ['$scope', function($scope) { 
        //your minsafe controller 
        $scope.message = "Message from WelcomeController"; 
    }]);
});
*/