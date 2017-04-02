var myApp = angular.module('myApp', []);
myApp.controller('myAppController', ['$scope', function myAppController($scope) {
    $scope.countries = [
        { name:"China", population: 1300000000 },
        { name:"India", population: 1982365666 },
        { name:"United States", population: 300000000 }
    ];
}]);