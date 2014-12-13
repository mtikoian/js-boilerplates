/*
 * Factory's boilerplate
 */

// Factory -> returns the function's retun value.
// Provider -> returns the output of the function's $get function.
// Service -> returns the actual function.

// // Requirejs:
// Note how in .service we create service methods using this.methodname. 
// In .factory we created a factory object and assigned the methods to it.
define(['app'], function (app) {
    app.factory('MyCustomeFactory', ['$http', function($http) { 
        //your minsafe controller 
        var factory = {}; 
 
        factory.method1 = function() {
                //..
            }

        factory.method2 = function() {
                //..
            }

        return factory;
    }]);
});

// Without Requirejs:
module.factory('MyCustomeFactory', ['$http', function($http) { 
    //your minsafe controller 
    var factory = {}; 

    factory.method1 = function() {
            //..
        }

    factory.method2 = function() {
            //..
        }

    return factory;
}]);

// Or:
// Without Requirejs:
module.factory('MyCustomeFactory', function() {
     
    var factory = {}; 
 
    factory.method1 = function() {
            //..
        }
 
    factory.method2 = function() {
            //..
        }
 
    return factory;
});