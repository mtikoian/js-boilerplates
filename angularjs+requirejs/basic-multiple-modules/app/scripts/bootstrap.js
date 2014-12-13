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
        // bootstrap to the document root.
        // note that you must include all available modules - no automatic (ng-app) bootstrapping.
        //ng.bootstrap(document, ['helloWorld','shoppingCart','namesList']);
        
        // bootstrap to the individual element.
        ng.bootstrap(document.getElementById("App1"),['shoppingCart']);
        ng.bootstrap(document.getElementById("App2"),['namesList']);
        
        // Bootstrap single module.
        //ng.bootstrap(document, ['myApp']);
    });
});