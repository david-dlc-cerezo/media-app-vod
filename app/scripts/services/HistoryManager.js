(function() {
  'use strict';

  module.exports = function(mediaAppVodApp) {
    /**
     * Helps to manage the Viewed Movie History
     * @name mediaAppVodApp.HistoryManager
     * @description
     * # HistoryManager
     * Service in the mediaAppVodApp.
     */
    mediaAppVodApp.factory('HistoryManager', [
      'MovieManager',
      '$q',
      HistoryManager
    ]);
  };

  function HistoryManager(MovieManager, $q) {
    // Public API here
    return {

      /**
       * Add movie to the history and saves it to the localStorage
       * @param {Movie} movie Viewed movie to add
       */
      addToHistory(movie) {
        var history = this.getHistory();
        // If the movie is in the history remove it before add it again (at the begining of the array)
        var index = history.indexOf(movie.id);
        if (index >= 0) {
          history.splice(index, 1);
        }
        // Add to the history & save
        history.unshift(movie.id);
        _saveHistory(history);
      },

      /**
       * Get saved viewed movie history
       * @return {String[]} Array with the ids of the viewedMovies (First is the most recently viewed and last)
       */
      getHistory() {
        return JSON.parse(localStorage.getItem('viewedMovies')) || [];
      },

      /**
       * Get saved viewed movie history with all movie details
       * @return {Movie[]} An array of the viewed movies with Movie elements (First is the most recently viewed)
       */
      getHistoryWithMovieDetails() {
        var deferred = $q.defer();
        var history = this.getHistory();
        var promises = [];
        for (var i = 0; i < history.length; i++) {
          promises[i] = MovieManager.getMovieById(history[i]);
        }
        $q.all(promises)
          .then((results) => {
            deferred.resolve(results);
          })
          .catch(deferred.reject);
        return deferred.promise;
      }
    };

  }

  /**
   * Private functon to save viewed history on localStorage
   * @param       {String[]} history History as an array of movies ID's
   * @constructor
   */
  function _saveHistory(history) {
    localStorage.setItem('viewedMovies', JSON.stringify(history));
  }
})();
