// Requirejs:
// Note that you must use camel case for the diective name - always lowercase on the first letter.
define(['app'], function (app) {
    app.directive('myCustomeDirective', function() {
        return {
          restrict: 'AE',
          replace: true,
          template: '<p style="background-color:{{color}}">Hello World</p>',
          compile: function(tElem,attrs) {
            //do optional DOM transformation here
            
            return function(scope,elem,attrs) {
                //linking function here
            };
          },
          // if you are using compile then this will be ignored by angular.
          link: function(scope, elem, attrs) {
            //
          }
        };
    });
});

// Without Requirejs:
module.directive('myCustomeDirective', function() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<p style="background-color:{{color}}">Hello World</p>',
      compile: function(tElem,attrs) {
        //do optional DOM transformation here

        return function(scope,elem,attrs) {
            //linking function here
        };
      },
      // if you are using compile then this will be ignored by angular.
      link: function(scope, elem, attrs) {
        //
      }
    };
});