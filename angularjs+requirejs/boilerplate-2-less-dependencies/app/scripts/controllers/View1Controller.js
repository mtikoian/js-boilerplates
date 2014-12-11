// With a factory.
define(['app'], function (app) {
    //console.log(app);
    app.module1.controller('View1Controller', ['$scope','UserFactory', function($scope,userFactory) { 
        //your minsafe controller 
        $scope.message = "Message from View1Ctrl"; 
        
        // Make sure to have the controller to use the promise or the success/error callbacks:
        // option (1) with promise
        userFactory.getUsers().then(function(response) {
            $scope.users = response.data;
            //console.log($scope.users);
        });
        
        // option (2) callback
        /*
        userFactory.getUsers().success(function(data) {
            $scope.users = data;
        });
        */
    }]);
});

// Without the factory.
/*
define(['app'], function (app) {
    //console.log(app);
    app.module1.controller('View1Ctrl', ['$scope','$http', function($scope,$http) { 
        //your minsafe controller 
        $scope.message = "Message from View1Ctrl"; 
        $http.get('api.php').success(function(data) {
            // here the data from the api is assigned to a variable named users
            $scope.users = data;
        });
    }]);
}); 
*/