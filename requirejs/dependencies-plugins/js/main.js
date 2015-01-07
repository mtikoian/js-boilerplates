require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: 'app/app',
        jquery: 'lib/jquery',
        dep0: 'app/dep-0',
        dep1: 'app/dep-1',
        dep2: 'app/dep-2',
        plugin1: 'app/plugin-1'
    },
    shim: {
        app: {
            exports: 'app'
        },
        jquery: {
            exports: '$'
        },
        dep0: {
            deps: ['jquery'],
            exports: 'dep0'
        },
        dep1: {
            deps: ['jquery'],
            exports: 'dep1'
        },
        dep2: {
            deps: ['jquery'],
            exports: 'dep2'
        },
        plugin1: {
            deps: ['jquery'],
            exports: 'plugin1'
        }
     }
});

// Start the main app logic.
require(['app'], function   (app) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log('this is main.js in js/');
});


// or
/*
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'lib/jquery'
    },
    shim: {
        jquery: {
            exports: '$'
        }
     }
});

// Start the main app logic.
requirejs(['jquery','app/app'], function   ($,app) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log('this is main.js in js/');
});
*/