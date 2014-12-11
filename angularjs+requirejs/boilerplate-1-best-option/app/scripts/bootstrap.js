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
        ng.bootstrap(document, ['myApp','myApp2']);
        
        // Bootstrap single module.
        //ng.bootstrap(document, ['myApp']);
    });
});