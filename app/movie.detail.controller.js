(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('detailController', detailController);

    detailController.$inject = ['movieFactory', '$stateParams', 'toastr'];

    /* @ngInject */

    function detailController(movieFactory, $stateParams, toastr) {
        var vm = this;
        vm.title = 'detailController';



        function getDetails() {
            movieFactory.getDetails($stateParams.movieDetailId).then(
                function(response) {
                    vm.detailResponse = response.data;
                    console.log(vm.detailResponse);

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
        };
        getDetails();

    }

})();
