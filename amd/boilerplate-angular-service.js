define([
    'app'
], function (app) {
    
    //service style, probably the simplest one
    app.service('helloWorldFromService', function() {
        
        // Put your code here.
        // Sample code:
        this.sayHello = function() {
            return "Hello, World!";
        };
    });
    

});