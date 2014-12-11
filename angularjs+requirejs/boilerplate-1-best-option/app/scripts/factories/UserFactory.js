define(['app'], function (app) {
    //console.log(app);
    app.module1.factory('UserFactory', ['$http', function($http) { 
        //your minsafe controller 
        var factory = {};
        
        // Factory does not come with this.yourMethod so you can't do something like this.getUsers = function(){...} which a service can.
        factory.getUsers = function(){
            // To use promises (or at least $http) correctly in this case, change factory.getUsers to return the $http promise:
            return $http.get('api.php');
            /*
            $http.get('api.php').success(function(data) {
                // here the data from the api is assigned to a variable named users.
                console.log(data);
                return data;
            }); 
            */
        }; 

        return factory;
    }]);

}); 