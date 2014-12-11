// UMD dance - https://github.com/umdjs/umd
!function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function($) {
    'use strict';
 
    // Default options
    var defaults = {
        test1 : "hello",
        test2 : "world!"
    };
 
    // Constructor, initialise everything you need here
    var Plugin = function(element, options) {
        this.element   = element;
        this.options   = options;
    };
 
    // Plugin methods and shared properties
    Plugin.prototype = {
        // Reset constructor - http://goo.gl/EcWdiy
        constructor: Plugin,
 
        someMethod: function(options) {
            return options;
        }
    };
 
    // Create the jQuery plugin
    $.fn.plugin = function(options) {
        // Do a deep copy of the options - http://goo.gl/gOSSrg
        options = $.extend(true, {}, defaults, options);
 
        return this.each(function() {
            var $this = $(this);
            // Create a new instance for each element in the matched jQuery set
            // Also save the instance so it can be accessed later to use methods/properties etc
            // e.g. 
            //    var instance = $('.element').data('plugin');
            //    instance.someMethod();
            $this.data('plugin', new Plugin($this, options));
        });
    };
 
    // Expose defaults and Constructor (allowing overriding of prototype methods for example)
    $.fn.plugin.defaults = defaults;
    $.fn.plugin.Plugin   = Plugin;
});


/*
 * @ussage:
 * 
    var plugin = $('.align-center').plugin();
    var instance = $('.align-center').data('plugin');

    console.log(instance);
    console.log(instance.someMethod("hello world"));
    
   
    var element = $('.align-center').plugin();
    var instance2 = $('.align-center').data('plugin');
    
    console.log(element.data('plugin'));
    console.log(instance2);
    console.log(instance2.someMethod("hello world!!!"));
*/