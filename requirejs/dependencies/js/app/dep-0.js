// Start the main app logic.
define([
    'jquery'
],function   ($) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log('dep 0 is loaded');
    
    var method = function(param){
      return param;  
    };
    
    return {
       init:method 
    };
});