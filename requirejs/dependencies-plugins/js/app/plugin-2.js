// Start the main app logic.
define([
    'jquery'
],function ($) {
    
    // Best option for jQuery based app.
    
    // jQuery plugin.
    // wrap code within anonymous function: a private namespace
    // replace 'MyPlugin' and 'myplugin' below in your own plugin...
    // constructor function for the logical object bound to a
    // single DOM element
    
    // Create the plugin name and defaults once
    var pluginName = 'plugin2';
   
    // Attach the plugin to jquery namespace.
    $.fn[pluginName] = function(options) {
        
        // Remember the root assigned object.
        var RootObject = this;
        
        // Set private defaults.
        var defaults = {
            param1:       'param1',
            param2:       'param2',
            onSuccess:    function(){}
        };
        
        // Do a deep copy of the options - http://goo.gl/gOSSrg
        var RootOptions = $.extend(true, {}, defaults, options);
        
        // Private debug function.
        function log(msg) {
            console.debug(msg);
        }
        
        // Define the public api and its public methods.
        var PublicApi = {
            
            method1 : function (PublicOptions) {
               
                // Remember the root (var PublicApi) object.
                var PublicApi = this;
                
                console.log(PublicApi);
                
                console.log(RootOptions);
                
                console.log(RootObject);
                
                RootObject.text(function() {
                    return +$(this).text() + 1;
                });
                
                // Process the options.
                var Options = $.extend(true, {}, RootOptions, PublicOptions);
                console.log(Options);
                
                // Access the private method.
                log("copy_array");
                
                // A callback.
                Options.onSuccess();
                
                // Return the public root object for chaining.
                return this;
            },
            method2 : function (PublicOptions) {
               
                // Remember the root (var api) object.
                var PublicApi = this;
                
                console.log(PublicApi);
                
                console.log(RootOptions);
                
                console.log(RootObject);
                
                RootObject.text(function() {
                    return +$(this).text() + 1;
                });
                
                // Process the options.
                var Options = $.extend(true, {}, RootOptions, PublicOptions);
                console.log(Options);
                
                // Return the public root object for chaining.
                return this;
            }
        };
        
        // Return the PublicApi object.
        return PublicApi;
    };
    
    // Return the plugin as a function.
    return function(element, options){
        
        if(element !== undefined && $(element).length !== 0) {
            return $(element)[pluginName](options);
        } else {
            return $(this)[pluginName](options); //'this' refers to global window.
        }
        
    };
    
    /* Usage in Requirejs:
    define([plugin2]],function(plugin2) {
        plugin2(".element",{}).method1();
    });
    */
   
    //Without Requirejs:
    //$(".element").plugin2();
    
});