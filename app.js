// Loopingw ith engRepeat


var myApp = angular.module('myApp', []);
myApp.controller('myAppController', ['$scope', function myAppController($scope) {
    $scope.names = ["Basia", "Kasia", "Zosia"];

    $scope.addName = function () {
        $scope.names.push($scope.inputName)
    }

}]);