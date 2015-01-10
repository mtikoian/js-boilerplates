// Start the main app logic.
define([
    'jquery'
],function ($) {
    
    // Create the plugin name and defaults once
    var pluginName = 'plugin1',
        defaults = {
            param1:       'param1',
            param2:       'param2'
        };
 
    // Constructor, initialise everything you need here
    var Plugin = function(element, options) {
        this.element    = element;
        this.options    = options;
    };
 
    // Plugin methods and shared properties
    Plugin.prototype = {
        // Reset constructor - http://goo.gl/EcWdiy
        constructor: Plugin,
 
        method1: function(options) {
            // Confirm a varible for the plugin's root itself.
            var base = this;
            
            console.log("default options: ");
            console.log(base.options);
            
            console.log("provided options: ");
            console.log(options);
            
            console.log("provided element: ");
            console.log(this.element);
            
            // Process the setting.
            var properties = $.extend(true, {}, base.options, options );
            console.log("processed settings: ");
            console.log(properties);
            
            return options;
        }
    };
 
    // Create the jQuery plugin
    $.fn[pluginName] = function(options) {
        // Do a deep copy of the options - http://goo.gl/gOSSrg
        options = $.extend(true, {}, defaults, options);
 
        return this.each(function() {
            var $this = $(this);
            // Create a new instance for each element in the matched jQuery set
            // Also save the instance so it can be accessed later to use methods/properties etc
            // e.g. 
            //    var instance = $('.element').data('plugin');
            //    instance.someMethod();
            $this.data('plugin_' + pluginName, new Plugin($this, options));
        });
    };
 
    // Expose defaults and Constructor (allowing overriding of prototype methods for example)
    $.fn[pluginName].defaults = defaults;
    $.fn[pluginName].Plugin   = Plugin;
    
    // Return the plugin in a function.
    return function(element, options){
        
        if(element !== undefined && $(element).length !== 0) {
            return $(element)[pluginName](options).data('plugin_' + pluginName);
        } else {
            return $(this)[pluginName](options).data('plugin_' + pluginName); //'this' refers to global window.
        }
        
    };
    
});