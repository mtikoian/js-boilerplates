// Start the main app logic.
define([
    'jquery',
    'dep0'
],function   ($, dep0) {
    //jQuery, canvas and the sub module are all
    //loaded and can be used here now.
    console.log("length of .something-2: " + $(".something-2").length);
    console.log('dep 2 is loaded');
    console.log(dep0.init('dep 2 depends on 0'));
});