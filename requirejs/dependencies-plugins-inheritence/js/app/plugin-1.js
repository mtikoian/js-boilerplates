// Start the main app logic.
define([
    'jquery'
],function ($) {
    
    // Create the plugin name and defaults once
    var pluginName = 'speaker';
    
    // Private debug function.
    function log(msg) {
        console.debug(msg);
    }
    
    /**
    * Object Speaker
    * An object representing a person who speaks.
    */
   var Speaker = {
       init: function(options, element) {

           // Mix in the passed in options with the default options
           this.options = $.extend({},this.options,options);

           // Save the element reference, both as a jQuery
           // reference and a normal reference
           this.elem  = element;
           this.$elem = $(element);

           // Build the dom initial structure
           this.build();

           // return this so we can chain/use the bridge with less code.
           return this;

       },
       options: {
           name: "No name",
           message: "No message",
           onSuccess: function(){}
       },
       build: function(){
           this.$elem.html('<h1>'+this.options.name+'</h1>');
           return this;
       },
       speak: function(options){
           
           // Mix in the passed in options with the default options
           this.options = $.extend({},this.options,options);
           
           // You have direct access to the associated and cached jQuery element
           this.$elem.append('<p>'+this.options.message+'</p>');
           
           // Access the private method.
           log("copy_array 1");
           
           this.options.onSuccess();
            
           return this;
       }
   };

   // Make sure Object.create is available in the browser (for our prototypal inheritance)
   // Courtesy of Papa Crockford
   // Note this is not entirely equal to native Object.create, but compatible with our use-case
   if (typeof Object.create !== 'function') {
       Object.create = function (o) {
           function F() {} // optionally move this outside the declaration and into a closure if you need more speed.
           F.prototype = o;
           return new F();
       };
   }

   $.plugin = function(name, object) {
       $.fn[name] = function(options) {
           // optionally, you could test if options was a string
           // and use it to call a method name on the plugin instance.
           return this.each(function() {
               if ( ! $.data(this, name) ) {
                   $.data(this, name, Object.create(object).init(options, this));
               }
           });
       };
   };

    // With the Speaker object, we could essentially do this:
    $.plugin(pluginName, Speaker);
    
    // Return the plugin in a function.
    return function(element, options){
        
        if(element !== undefined && $(element).length !== 0) {
            return $(element)[pluginName](options).data(pluginName);
        } else {
            return $(this)[pluginName](options).data(pluginName); //'this' refers to global window.
        }
        
    };
    
    /*
    // At this point we could do the following
    return $('.element').speaker({name: "Alex"});
    
    var inst = $('.element').data('speaker');
    inst.speak('I am a method');
    
    var inst2 = $('.element').data('speaker');
    inst2.walk = function(){
      alert('walk!');  
    };
    
    inst2.walk();
    
    console.log(inst);
    */
    
});