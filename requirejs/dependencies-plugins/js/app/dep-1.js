// Start the main app logic.
define([
    'jquery',
    'dep0',
    'dep2'
],function   ($, dep0) {
    //jQuery, canvas and the sub module are all
    //loaded and can be used here now.
    console.log("length of .something-0: " + $(".something-0").length);
    console.log('dep 1 is loaded');
    console.log(dep0.init('dep 1 depends on 0'));
});