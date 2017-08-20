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
    mediaAppVodApp.controller('movielistcontrollerCtrl', [
      'MovieManager',
      movielistcontrollerCtrl
    ]);
  };


  function movielistcontrollerCtrl(MovieManager) {
      MovieManager.getMovies()
        .then((data) => {
            console.log(data);
        });
  }
})();
