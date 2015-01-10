// Start the main app logic.
define([
    'jquery',
    'plugin1',
    'plugin2',
    'plugin3',
    'plugin4',
    'plugin5',
    'dep0',
    'dep1'
],function   ($, plugin1, plugin2, plugin3, plugin4, plugin5, dep0, dep1) {
    
    console.log("plugin5: ");
    console.log(plugin5);
    var plugin =  plugin5(".element",{
        param1:'Hello!'
    });
    
    plugin.method1({
        param3:'World!',
        onSuccess: function(){
            console.log('Done!');
        }
    });
    
    console.log("plugin2: ");
    console.log(plugin2);
    var plugin = plugin2(".element",{
        param1:'Hello!'
    });
    
    plugin.method1({
        onSuccess: function(){
            console.log('Done!');
        }
    });
    
    // Or:
    $(".element").plugin2().method1();

    
});