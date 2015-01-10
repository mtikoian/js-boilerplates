// Start the main app logic.
define([
    'jquery'
],function ($) {
    
    // Best option for non-jQuery app such as AngularJS as 
    // this option does not attach the plugin to jquery namespace.
    
    // Native plugin.
    // 2 public functions, 1 private function and 1 private variable.
    // variables and functions private unless attached to API below.
    // 'this' refers to global window.
    
    // Private variable.
    var defaults = {
        param1:       'param1',
        param2:       'param2',
        onSuccess:    function(){}
    };
    
    // Private debug function.
    function log(msg) {
        console.debug(msg);
    }
    
    // Define the public api and its public methods.
    var PublicApi = function(element, options){
        
        // Remember the root assigned object.
        var Root;
        
        // Check if the provided element exists or not.
        if(element !== undefined && $(element).length !== 0) {
            Root = $(element);
        } else {
            Root = $(this); //'this' refers to global window.
        }
        
        // Do a deep copy of the options - http://goo.gl/gOSSrg
        var Options = $.extend(true, {}, defaults, options);
        
        // Bind the element and options to the root.
        Root.Element = Root;
        Root.Options = Options;
        
        // define the public API.
        var Methods = {

            method1: function(PublicOptions){

                // Process the options.
                var Options = $.extend(true, {}, Root.Options, PublicOptions);
                console.log(Options);

                Root.text(function() {
                    return +$(this).text() + 1;
                });

                // Access the private method.
                log("copy_array");
                
                // A callback.
                Options.onSuccess();

                // Return the public root object for chaining.
                return this;

            },
            method2: function(PublicOptions){

                // Process the options.
                var Options = $.extend(true, {}, Root.Options, PublicOptions);
                console.log(Options);

                Root.text(function() {
                    return +$(this).text() + 1;
                });

                // Return the public root object for chaining.
                return this;
            }
        };
        
        // Reutrn public methods in an object.
        return Methods;
    };
    
    // Return the api in a function.
    return PublicApi;  
});