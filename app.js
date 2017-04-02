'use strict';
var myApp = angular.module('myApp', []);
myApp.controller('myAppCtrl', ['$scope', '$http', function myAppCtrl($scope, $http) {
    $scope.sortField = 'population';
    $scope.reverse = true;

    $scope.sortFields = function (field) {
        $scope.sortField = field;
        $scope.reverse = !$scope.reverse;
    };

    $http.get('countries.json').success(function (data) {
        $scope.countries = data;
    })
}]);