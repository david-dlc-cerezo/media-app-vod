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
      'Movie',
      MovieManager
    ]);
  };

  function MovieManager($http, $q, Movie) {

    // Public API here
    return {
      getMovies: function() {
        var deferred = $q.defer();
        $http.get('https://demo2697834.mockable.io/movies')
            .then((response) => {
                var movieList = [];
                angular.forEach(response.data.entries, (movieData) => {
                    movieList.push(new Movie(movieData));
                });
                deferred.resolve(movieList);
            })
            .catch(deferred.reject);
        return deferred.promise;
      }
    };
  }
})();
