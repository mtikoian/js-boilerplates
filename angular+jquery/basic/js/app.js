// jQuery:
/*
$(function () {
    $("#jquery-button").click(function () {
        $("#jquery-content").toggle()
    })
});
*/

// Angular:
var app = angular.module("compare", []);

app.controller("AppCtrl", function ($scope) {

    $("#jquery-button").click(function () {
        $("#jquery-content").toggle()
    });

    $scope.isHidden = false;
    $scope.toggle = function () {
        $scope.isHidden = !$scope.isHidden;
    };
});