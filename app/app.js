(function() {
    'use strict';

    var movieApp = angular.module('movieApp', ['toastr', 'ui.router']);

    movieApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/partials/main.html"

            })

        .state('search', {
                url: "/search",
                templateUrl: "app/partials/search.html",
                controller: "mainController",
                controllerAs: "vm"

            })
            .state('details', {
                url: "/details/:movieDetailId",
                templateUrl: "app/partials/details.html",
                controller: "detailController",
                controllerAs: "vm"
            });
    });
})();
