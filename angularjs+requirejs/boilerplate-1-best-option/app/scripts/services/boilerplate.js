/*
 * Service's boilerplate
 */

// Factory -> returns the function's retun value.
// Provider -> returns the output of the function's $get function.
// Service -> returns the actual function.

// // Requirejs:
// Note how in .service we create service methods using this.methodname. 
// In .factory we created a factory object and assigned the methods to it.
define(['app'], function (app) {
    app.service('MyCustomService', ['$http', function($http) { 
        //your minsafe controller 
        this.method1 = function() {
                //..
            }

        this.method2 = function() {
                //..
            }
    }]);
});

// Without Requirejs:
module.service('MyCustomService', ['$http', function($http) { 
    //your minsafe controller 
    this.method1 = function() {
            //..
        }
 
    this.method2 = function() {
            //..
        }
}]);

// Or:
// Without Requirejs:
module.service('MyCustomService', function() {
    this.method1 = function() {
            //..
        }
 
    this.method2 = function() {
            //..
        }
});