// Start the main app logic.
define([
    '../js/app/dep-0',
    '../js/app/dep-1'
],function   (dep) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log('app is loaded');
    console.log(dep.init('app depends on 0'));
});