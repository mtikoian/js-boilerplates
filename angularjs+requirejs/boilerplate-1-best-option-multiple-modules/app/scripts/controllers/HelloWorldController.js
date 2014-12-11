// For multile modules access.
define(['app'], function (app) {
    app.module3.controller('HelloWorldController', ['$scope',function($scope) { 
        //your minsafe code
        $scope.message = "Hello World!"; 
    }]);
});