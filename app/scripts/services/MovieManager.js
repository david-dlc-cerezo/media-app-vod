(function() {
  'use strict';

  module.exports = function(mediaAppVodApp) {
    /**
     * Helps to Manage a Movie collection
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

      /**
       * Movie List with last retrieved available movies
       * @type {Movie[]}
       */
      movieList: [],

      /**
       * Get the list of available movies from the API
       * @return {Movie[]} Movie List with the available movies
       */
      getMovies() {
        var deferred = $q.defer();
        $http.get('https://demo2697834.mockable.io/movies')
          .then((response) => {
            this.movieList = [];
            angular.forEach(response.data.entries, (movieData) => {
              this.movieList.push(new Movie(movieData));
            });
            deferred.resolve(this.movieList);
          })
          .catch(deferred.reject);
        return deferred.promise;
      },

      /**
       * Get a single movie object by its ID
       * @param  {String}  movieId Movie ID to search
       * @return {Promise}         Resolves with the Found Movie if any
       */
      getMovieById(movieId) {
        var deferred = $q.defer();
        $q.when(this.movieList.length ? this.movieList : this.getMovies())
          .then((movieList) => {
            var movie;
            for (var i in movieList) {
              if (movieList[i].id === movieId) {
                movie = movieList[i];
                break;
              }
            }
            deferred.resolve(movie);
          })
          .catch(() => {
            deferred.resolve();
          });
        return deferred.promise;
      },

    };
  }
})();
