define(['app'], function (app) {
    app.module1.controller('HomeController', ['$scope', function($scope) { 
        //your minsafe controller 
        $scope.message = "Message from HomeCtrl"; 
    }]);
});