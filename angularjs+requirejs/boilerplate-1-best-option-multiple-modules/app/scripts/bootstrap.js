/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'app'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        // Bootstrap multiple modules.
        //ng.bootstrap(document, ['shoppingCart','namesList']);
        ng.bootstrap(document.getElementById("App2"),['namesList']);
        ng.bootstrap(document.getElementById("App3"),['helloWorld']);
        
        // Bootstrap single module.
        //ng.bootstrap(document, ['myApp']);
    });
});