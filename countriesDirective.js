var countriesDirective = angular.module('countriesDirective', []);

countriesDirective.directive('country', function () {
    return {
        restrict: 'A',
        scope: {
            country: '='
        },
        templateUrl: 'country.html',
        controller: function ($scope, countries) {
            countries.find($scope.country.id, function (country) {
                $scope.country.flag = country.flag;
            })
        }
    }
});