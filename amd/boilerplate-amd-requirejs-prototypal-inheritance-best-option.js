// Start the main app logic.
define([
    'jquery'
],function ($) {
    
    // Define the object constructor.
    var Plugin = function(element, options) {
        
        // Validate provided element.
        if(element !== undefined && typeof element === "string" && $(element).length !== 0) {
            this.element = element;
            this.$element = $(element);
        } else if(element !== undefined && element instanceof $ === true && element.length !== 0) {
            this.element = element;
            this.$element = $(element);
        } else {
            // default.
            this.element = null;
            this.$element = $(document);
        }
        
        // Store the provided options.
        this.options = $.extend(this.defaults, options);
        
        // Store the external plugins and bind them to the this.
        
        // Init the internal method.
        // Optional.
        this.init();
    }
    
    // Private debug function.
    function log(msg) {
        console.debug(msg);
    }
    
    // Define the public api and its public methods by extending the object.
    Plugin.prototype = {
        
        defaults : {
            name: "No name",
            message: "No message",
            onSuccess: function(){}
        },
        
        init : function () {
            this.$element.html('<h1>'+this.options.name+'</h1>');
            return this;
        },
        
        method : function(options) {
            
            // Remember the root as $root.
            var $root = this;
            
            // Mix in the passed in options with the default options
            var settings = $.extend({},$root.options,options);
           
            // You have direct access to the associated and cached jQuery element
            $root.$element.append('<p>' + settings.message + '</p>');
            
            // Access the private method.
            log("copy_array 2");
            
            // A callback.
            settings.onSuccess();
            
            // Return this object for chaining.
            return this;
        }
        
    };
    
    // Return this plugin.
    return Plugin;
    
});