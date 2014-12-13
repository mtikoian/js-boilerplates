require.config({
    //baseUrl: "",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'domReady': 'vendor/requirejs-domready/domReady',
        'angular': 'vendor/angular/angular'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
    
    // kick start application
    //deps: ['app/bootstrap']
});

/* 
 * You are defining the HomeCtrl in app/home.js and using it it app/app.js. So make sure that home.js is loaded before app.js in your web app.
 * Or,
 * Split the app.js into two parts - one for just creating the ng.module (module.js), and one for setting the config (module-config.js). Then the dependency tree will be:
 * app/module-config.js
 *   requires: app/home.js
 *   requires: app/module.js
*/
define([
    'controller/MainController',
    'controller/Module1Controller',
    'controller/Module2Controller',
    'bootstrap'
]);