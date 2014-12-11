define(['app'], function (app) {
    app.module1.directive('helloWorld', function() {
        return {
          restrict: 'AE',
          replace: true,
          template: '<p style="background-color:{{color}}">Hello World</p>',
          compile: function(tElem,attrs) {
              
            //do optional DOM transformation here
            console.log(tElem.html());
            console.log(attrs.style);
            tElem.html('Hello Kok');
            attrs.style = 'font-size:{{size}}px;background-color:{{color}}';
            console.log(attrs.style);
            
            return function(scope,elem,attrs) {
              //linking function here
                elem.bind('click', function() {
                elem.css('background-color', 'white');
                scope.$apply(function() {
                  scope.color = "white";
                });
              });
              elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
              });
            };
          },
          // if you are using compile then this will be ignored by angular.
          link: function(scope, elem, attrs) {
            elem.bind('click', function() {
              elem.css('background-color', 'white');
              scope.$apply(function() {
                scope.color = "white";
              });
            });
            elem.bind('mouseover', function() {
              elem.css('cursor', 'pointer');
            });
          }
        };
    });
}); 