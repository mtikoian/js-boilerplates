define(['app'], function (app) {
    app.module1.controller('SignupController', ['$scope', function($scope) {
      $scope.submitted = false;
      $scope.signupForm = function() {
        if ($scope.signup_form.$valid) {
          // Submit as normal
          alert(1);
        } else {
          $scope.signup_form.submitted = true;
        }
      }
    }]);
}); 