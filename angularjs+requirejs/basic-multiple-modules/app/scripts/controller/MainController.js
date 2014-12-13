// For multile modules access.
define(['app'], function (app) {
    app.mainmodule.controller('MainController', ['$scope',function($scope) { 
        //your minsafe code
        $scope.message = "Hello World!"; 
    }]);
});