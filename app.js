'use strict';

var countryApp = angular.module('countryApp', [
    'ngRoute'
]);

countryApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'country_list.html',
            controller: 'CountryListCtrl'
        })
        .when('/:countryId', {
            templateUrl: 'country_detail.html',
            controller: 'CountryDetailCtrl'
        })
        .otherwise({
            redirect: '/'
        })
}]);

countryApp.factory('countries', ['$http', function ($http) {
    return {
        list: function (callback) {
            $http({
                method: 'GET',
                url: 'countries.json',
                cache: true
            }).success(callback);
        },
        find: function (id, callback) {
            $http({
                method: "GET",
                url: 'country_' + id + ".json",
                cache: true
            }).success(callback)
        }
    };
}]);

countryApp.directive('country', function () {
    return {
        // A - <div moja-dyrektywa></div>
        // E - <moja-dyrektywa></moja-dyrektywa>
        // C - < div class='{ moja-dyrektywa: parametr }'>
        // M - dyrektywa tworzona poprzez komentarz
        restrict: 'A',
        scope: {
            // = - two way data binding
            // < - One way data binding
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


countryApp.controller('CountryListCtrl', ['$scope', 'countries',
    function ($scope, countries) {
        countries.list(function (countries) {
            $scope.countries = countries;
        })
    }]);

countryApp.controller('CountryDetailCtrl', ['$scope', '$routeParams', 'countries',
    function ($scope, $routeParams, countries) {
        countries.find($routeParams.countryId, function (country) {
            $scope.country = country;
        });
        $scope.name = $routeParams.countryId;
        $scope.goBack = function () {
            window.history.back();
        }
    }]);