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
          controller: [
            'movies',
            'Player',
            movieListCtrl
          ],
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


  function movieListCtrl(movies, Player) {
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

      play: Player.play
    };
  }
})();
