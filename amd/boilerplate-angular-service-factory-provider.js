define([
    'app'
], function (app) {
    
    //service style, probably the simplest one
    app.service('helloWorldFromService', function() {
        this.sayHello = function() {
            return "Hello, World! From Service!!"
        };
    });

    //factory style, more involved but more sophisticated
    app.factory('helloWorldFromFactory', function() {
        return {
            sayHello: function() {
                return "Hello, World! From Factory!!"
            }
        };
    });

    //provider style, full blown, configurable version     
    app.provider('helloWorld', function() {
        // In the provider function, you cannot inject any
        // service or factory. This can only be done at the
        // "$get" method.

        this.name = 'Default';

        this.$get = function() {
            var name = this.name;
            return {
                sayHello: function() {
                    return "Hello, " + name + "! From Provider!!"
                }
            }
        };

        this.setName = function(name) {
            this.name = name;
        };
    });
    
    /*
    //hey, we can configure a provider!            
    app.config(function(helloWorldProvider){
        helloWorldProvider.setName('World');
    });
    */
   

});