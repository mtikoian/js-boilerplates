/*
 * Provider's boilerplate
 */

// Factory -> returns the function's retun value.
// Provider -> returns the output of the function's $get function.
// Service -> returns the actual function.

// // Requirejs:
// Note that you cannot use 'Provider' as suffix in your provider name. 
// You can use uppercase on the first letter.
define(['app'], function (app) {
    app.module1.provider('myTest', [function() { 
        //your minsafe code 
        var property = 'something';
        return {
            // Set method for receiving data.
            setProperty: function(value) {
                property = value;
            },
            // You must always use $get.
            $get: function() {
                return {
                    title: property,
                    getProperty: function() {
                        return property;
                    }
                }
            }
        }
    }]);

}); 

// Without Requirejs:
module.provider('myTest', [function() { 
    //your minsafe code 
    var property = 'something';
    return {
        setProperty: function(value) {
            property = value;
        },
        $get: function() {
            return {
                title: property,
                getProperty: function() {
                    return property;
                }
            }
        }
    }
}]);

// Or:
// Without Requirejs:
// Note that this pattern is not minsafe.
module.provider('myTest', function() {
     
    var property = 'something';
    return {
        setProperty: function(value) {
            property = value;
        },
        $get: function() {
            return {
                title: property,
                getProperty: function() {
                    return property;
                }
            }
        }
    }
});