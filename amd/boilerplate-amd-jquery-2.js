!function(global) {
    'use strict';
 
    var defaults = {
        'default': 'yeah',
        'test': 'simon'
    };
 
    // Wrapper function that allows us to pass it to define later
    var wrap = function($) {
 
        // Standard JS object stuff
        var Foo = function(element, options) {
            this.options = options;
            this.element = element;
 
            // Instance specific stuff
        };
 
        Foo.prototype = {
            // All your methods here
            
            // Reset constructor - http://goo.gl/EcWdiy
            constructor: Foo,

            someMethod: function(options) {
                return options;
            }
        };
 
        // Here is the actual jQuery plugin part. It just creates a new Foo object
        // for each matched element in the jQuery object. 
        $.fn.foo = function(options) {
            options = $.extend(true, {}, defaults, options);
 
            return this.each(function() {
                var $this = $(this);
                // Assign the instance to a data property so the methods can 
                // be used
                $this.data('foo', new Foo($this, options));
            });
        };
 
        $.fn.foo.defaults   = defaults;
        $.fn.foo.Foo        = Foo;
    };
 
    // Check for the presence of an AMD loader and if so pass the wrap function to define
    // We can safely assume 'jquery' is the module name as it is a named module already - http://goo.gl/PWyOV
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], wrap);
    } else {
        // Otherwise we assume jQuery was loaded the old fashioned way and just pass the jQuery object to wrap
        wrap(global.jQuery);
    }
}(this);

/*
 * @usage:
 * 
    var plugin = $('.align-center').foo();
    var instance = $('.align-center').data('foo');
    
    console.log(plugin.data('foo'));
    console.log(instance);
    console.log(instance.someMethod("hello world"));
    
   
    var element = $('.align-center').foo();
    var instance2 = $('.align-center').data('foo');
    
    console.log(element.data('foo'));
    console.log(instance2);
    console.log(instance2.someMethod("hello world!!!"));
*/