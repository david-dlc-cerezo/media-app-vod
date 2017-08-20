(function() {
  'use strict';

  module.exports = function(mediaAppVodApp) {
    /**
     * @ngdoc service
     * @name mediaAppVodApp.MovieManager
     * @description
     * # MovieManager
     * Factory in the mediaAppVodApp.
     */
    mediaAppVodApp.factory('MovieManager', [
      '$http',
      '$q',
      MovieManager
    ]);
  };

  function MovieManager($http, $q) {

    // Public API here
    return {
      getMovies: function() {
        var deferred = $q.defer();
        $http.get('https://demo2697834.mockable.io/movies')
            .then((response) => {
                deferred.resolve(response.data);
            })
            .catch(deferred.reject);
        return deferred.promise;
      }
    };
  }
})();
