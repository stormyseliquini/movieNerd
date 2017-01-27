(function() {
    'use strict';

    angular
        .module('movieApp')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieFactory($http, $q) {

        var service = {
            getMovie: getMovie,
            getDetails: getDetails
        };

        return service;

        ////////////////

        function getMovie(searchMovie) {

            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/?',
                    params: {
                        s: searchMovie
                    }
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);


                        } else {
                            defer.reject(response);
                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);

                    });

            return defer.promise;
        }

        function getDetails(id) {

            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/?',
                    params: {
                        i: id
                    }
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);


                        } else {
                            defer.reject(response);
                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);

                    });

            return defer.promise;
        }



    }
})();
