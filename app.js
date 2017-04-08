'use strict';

var countryApp = angular.module('countryApp', [
    'ngRoute',
    'countryControllers',
    'countriesDirective',
    'countriesFactory'
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




