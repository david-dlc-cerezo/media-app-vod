(function() {
  'use strict';

  module.exports = function(mediaAppVodApp) {
    /**
     * Helps to Play a Movie
     * @name mediaAppVodApp.MovieManager
     * @description
     * # MovieManager
     * Factory in the mediaAppVodApp.
     */
    mediaAppVodApp.factory('Player', [
      '$uibModal',
      'HistoryManager',
      Player
    ]);
  };

  function Player($uibModal, HistoryManager) {
    // Public API here
    return {
      /**
       * Opens a modal with the video to play it
       * @param  {Movie} movieToPlay Movie to play
       */
      play(movieToPlay) {

        // Open modal with the video
        $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'scripts/views/play.html',
          controller: function playCtrl($scope, $uibModalInstance) {
            $scope.movie = movieToPlay;
            this.cancel = function() {
              $uibModalInstance.close();
            };
          },
          controllerAs: 'vm',
          size: 'lg'
        });

        // Add movie to history
        HistoryManager.addToHistory(movieToPlay);
      }
    };
  }
})();
