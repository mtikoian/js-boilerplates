requirejs.config({
    //By default load any module IDs from js/lib
    //Do not use baseUrl if you use mod_rewrite in your .htaccess.
    //baseUrl: '',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: 'app/app',
        jquery: '../../core/js/lib/jquery'
    },
    shim: {
        app: {
            exports: 'app'
        },
        jquery: {
            exports: '$'
        }
     }
});

// Start the main app logic.
requirejs(['jquery','app'], function   ($,app) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log('this is main.js in js/');
});


// or
/*
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'local/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: 'app/app',
        jquery: '../../core/js/lib/jquery'
    },
    shim: {
        app: {
            exports: 'app'
        },
        jquery: {
            exports: '$'
        }
     }
});

// Start the main app logic.
requirejs(['jquery','app'], function   ($,app) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log('this is main.js in js/');
});

*/