(function() {
  'use strict';

  module.exports = function(mediaAppVodApp) {
    /**
     * @ngdoc function
     * @name mediaAppVodApp.controller:MovielistcontrollerCtrl
     * @description
     * # movieListCtrl
     * Controller of the mediaAppVodApp
     */
    mediaAppVodApp.config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider.state({
          name: 'list',
          url: '/',
          templateUrl: 'scripts/views/list.html',
          controller: movieListCtrl,
          controllerAs: 'vm',
          resolve: {
            movies: function(MovieManager) {
              return MovieManager.getMovies();
            }
          }
        });
      }
    ]);
  };


  function movieListCtrl(movies, $uibModal) {
    return {
      movies: movies,
      slickConfig: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        lazyLoad: 'ondemand',
        infinite: true,
        centerMode: true,
        variableWidth: true
      },
      play(movie) {
        $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'scripts/views/play.html',
          controller: function playCtrl($scope, $uibModalInstance) {
            $scope.movie = movie;
            this.cancel = function() {
              $uibModalInstance.dismiss('cancel');
            };
          },
          controllerAs: 'vm',
          size: 'lg'
        });
      }
    };
  }
})();
