// Looping with engRepeat


var myApp = angular.module('myApp', []);
myApp.controller('myAppController', ['$scope', function myAppController($scope) {
    $scope.names = ["Basia", "Kasia", "Zosia"];

    $scope.addName = function () {
        $scope.names.push($scope.inputName);
        $scope.inputName = '';
    }

    $scope.removeName = function (nameText) {
        var i = $scope.names.indexOf(nameText);
        $scope.names.splice(i, 1);

    }
}]);