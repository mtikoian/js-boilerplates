/*
 * Controller's boilerplate
 */

// Requirejs:
define(['app'], function (app) {
    app.controller('MyController', ['$scope', function($scope) { 
        //your minsafe controller 
        $scope.message = "Message from MyController"; 
    }]);
});

// Without Requirejs:
module.controller('MyController', ['$scope', function($scope) { 
    //your minsafe controller 
    $scope.message = "Message from MyController"; 
}]);
