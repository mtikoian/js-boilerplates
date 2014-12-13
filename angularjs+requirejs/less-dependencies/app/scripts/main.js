require.config({
    //baseUrl: "",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        //'domReady': 'vendors/requirejs-domready/domReady', // you don't need this file if you want to Go either for automatic (ng-app) bootstrapping, such as <div ng-app="myApp">...</div>
        'angular': 'vendors/angular/angular',
        'angular-route': 'vendors/angular-route/angular-route',
        'jquery': 'vendors/jquery/dist/jquery'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
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
    'controllers/HomeController',
    'controllers/View1Controller',
    'controllers/SignupController',
    'controllers/WelcomeController',
    'directives/helloWorldDirective',
    'factories/UserFactory',
    'router'
    //'bootstrap' // you don't need this file if you want to Go either for automatic (ng-app) bootstrapping, such as <div ng-app="myApp">...</div>
]);