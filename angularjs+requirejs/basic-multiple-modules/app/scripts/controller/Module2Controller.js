define(['app'], function (app) {
    app.module2.controller('NamesController', ['$scope', function($scope) { 
        //your minsafe controller 
        $scope.names = [
            {username: "Nitin"},
            {username: "Mukesh"}
        ];
    }]);
});