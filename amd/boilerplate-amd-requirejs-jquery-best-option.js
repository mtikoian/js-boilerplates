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
    
    // Attach the plugin to jQuery namespace.
    $.fn[pluginName] = function(PublicOptions) {
        
        // Remember the assigned object as Root.
        var Root = this;
        
        // Set private defaults.
        var Defaults = {
            param1:       'param1',
            param2:       'param2',
            onSuccess:    function(){}
        };
        
        // Global variable.
        if(window.Templates === undefined) {
            window.Templates = {};
        }
        
        // Do a deep copy of the options - http://goo.gl/gOSSrg
        var Options = $.extend(true, {}, Defaults, PublicOptions);
        
        // Bind the element, options and other stuff to the root.
        Root.Element = Root;
        Root.Options = Options;
        
        // Private debug function.
        function log(msg) {
            console.debug(msg);
        }
        
        // Define the public api and its public methods.
        var PublicApi = {
            
            method : function (PublicOptions) {
               
                // Remember the root (var PublicApi) object.
                var Scope = this;
                
                // Process the options.
                var Options = $.extend(true, {}, Root.Options, PublicOptions);
                
                // Access the private method.
                log("copy_array");
                
                // A callback.
                Options.onSuccess();
                
                // Return the public root object for chaining.
                return this;
            }
        };
        
        // Return the PublicApi object.
        return PublicApi;
    };
    
    // Return the plugin in a function.
    return function(element, options){
        
        if(element !== undefined && typeof element === "string" && $(element).length !== 0) {
            return $(element)[pluginName](options);
        }else if(element !== undefined && element instanceof $ === true && element.length !== 0) {
            return element[pluginName](options);
        }else{
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