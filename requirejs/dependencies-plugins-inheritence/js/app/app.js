// Start the main app logic.
define([
    'jquery',
    'plugin1',
    'plugin2'
],function   ($, plugin1, plugin2) {

    console.log("plugin1: ");
    console.log("default public method called: ");
    console.log(plugin1('.element',{
        name: "Alex"
    }).speak({
        message:'I am a method!!',
        onSuccess: function(){
            console.log('done speaking!');
        }
    }));
    
    // Extending the plugin.
    var inst = plugin1('.element',{name: "Alex"});
    inst.walk = function(){
      return this.options;
    };
    
    console.log("extended method called: ");
    console.log(inst.walk());
    
    console.log("plugin2: ");
    var pp = new plugin2('.element',{
        name: "Porky Pig",
        onSuccess: function(){
            console.log('done 2!');
        }
    });
    console.log(pp);
    pp.method({
        message: "That's all folks!",
        onSuccess: function(){
            console.log('method done!');
        }
    });
    
    plugin2.prototype.walk = function (destination) {
        $('<p>', {
            text: this.options.name + " walks " + destination + ".",
            css: { color: "red" }
        }).appendTo(this.elem);
        return this;
    };
    
    console.log("extended method called: ");
    pp.walk("off the stage");
    console.log(pp);
     
    // Access the private method.
    console.log("error accessing the private mehtod: ");
    pp.log("copy_array 2");
    
    console.log("error accessing the private mehtod globally: ");
    log("copy_array 2");
});