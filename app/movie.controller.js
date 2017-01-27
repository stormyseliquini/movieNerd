(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('mainController', mainController);

    mainController.$inject = ['movieFactory', 'toastr'];

    /* @ngInject */
    function mainController(movieFactory, toastr) {
        var vm = this;
        vm.title = 'mainController';

        vm.movieClick = function(searchMovie) {
            movieFactory.getMovie(searchMovie).then(
                function(response) {
                    vm.movieResponse = response.data;
                    console.log(vm.movieResponse);

                    toastr.success('we have movies');
                },
                function(error) {
                    if (error.data) {
                        toastr.error("there was a problem: " + error.data);
                    } else {
                        toastr.info('no data found.');
                    }
                }

            )
            vm.searchMovie = '';
        };




    }

})();
