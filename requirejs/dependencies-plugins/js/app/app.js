// Start the main app logic.
define([
    'jquery',
    'plugin1',
    //'dep0',
    //'dep1'
],function   ($, plugin1, dep0, dep1) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    
    console.log("overriding default options: ");
    $.fn.plugin1.defaults.param1 = 'hello';
    $.fn.plugin1.defaults.param3 = 'world';
   
    //console.log(plugin1(document));
    plugin1(".element").someMethod({
        param1:       'something',
        param2:       'anything'
    });
    
    console.log('app is loaded');
    //console.log(dep0.init('app depends on 0'));
});