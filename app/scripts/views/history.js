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
    mediaAppVodApp.controller('movieHistoryCtrl', [
        movieHistoryCtrl
      ])
      .config([
          '$stateProvider',
          function($stateProvider){
              $stateProvider.state({
                  name: 'history',
                  url: '/history',
                  templateUrl: 'scripts/views/history.html',
                  controller: 'movieHistoryCtrl',
                  controllerAs: 'vm'
              });
          }]);
  };


  function movieHistoryCtrl() {
    console.log('movieHistoryCtrl');
  }
})();
