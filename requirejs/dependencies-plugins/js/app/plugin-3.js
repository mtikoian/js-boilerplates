// Start the main app logic.
define([
    'jquery'
],function ($) {
    
    // a naive example module with 2 public functions,
    // 1 private function and 1 private variable
    // variables and functions private unless attached to API below
    // 'this' refers to global window

    // private array
    var array = [];

    // add a number into array
    function add(a) {
        log("add "+a);
        array.push(a);
        
        return this;
    }

    // return copy of the array
    function get() {
        log("copy_array");
        return array.slice();
    }

    // a private debug function
    function log(msg) {
        console.debug(msg);
    }

    // define the public API
    var api = {};
    api.add = add;
    api.get = get;

    return api;
    
});