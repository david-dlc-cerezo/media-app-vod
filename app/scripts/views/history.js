(function() {
  'use strict';

  module.exports = function(mediaAppVodApp) {
    /**
     * @ngdoc function
     * @name mediaAppVodApp.controller:MovielistcontrollerCtrl
     * @description
     * # MovielistcontrollerCtrl
     * Controller of the mediaAppVodApp
     */
    mediaAppVodApp.config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider.state({
          name: 'history',
          url: '/history',
          templateUrl: 'scripts/views/history.html',
          controller: [
            'HistoryManager',
            'Player',
            MovieHistoryCtrl
          ],
          controllerAs: 'vm'
        });
      }
    ]);
  };

  function MovieHistoryCtrl(HistoryManager, Player) {
    angular.extend(this, {
      history: [],
      play: Player.play,
      getHistoryWithMovieDetails: function() {
        HistoryManager.getHistoryWithMovieDetails()
          .then((result) => {
            this.history = result;
          });
      }
    });

    this.getHistoryWithMovieDetails();
  }
})();
