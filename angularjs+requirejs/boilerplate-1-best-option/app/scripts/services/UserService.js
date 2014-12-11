define(['app'], function (app) {
    //console.log(app);
    app.module1.service('UserService', ['$http', function($http) { 
        //your minsafe controller 
        /*
        this.getUsers = function() {
            // To use promises (or at least $http) correctly in this case, change factory.getUsers to return the $http promise:
            return $http.get('api.php');
        };
        */
        //or :
        return {
            getUsers: getUsers
        };
        
        function getUsers(){
            // To use promises (or at least $http) correctly in this case, change factory.getUsers to return the $http promise:
            return $http.get('api.php');
        }
    }]);

}); 