(function() {
  'use strict';

  module.exports = function(mediaAppVodApp) {
    /**
     * Movie singleton
     * @name mediaAppVodApp.Movie
     * @description
     * # Movie
     * Service in the mediaAppVodApp.
     */
    mediaAppVodApp.service('Movie', [
      MovieService
    ]);
  };

  function MovieService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function Movie(data) {
      this.load(data);
    }

    Movie.prototype = {

      /**
       * Loads movie info from the raw movie data obtained with the API
       * @param  {JSON} data Movie info from the API
       */
      load(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        if (angular.isArray(data.images)) {
          for (var i in data.images) {
            if (data.images[i].type === 'cover') {
              this.cover = data.images[i].url;
              break;
            }
          }
        }
        this.video = angular.isArray(data.contents) ? data.contents[0] : undefined;
      }

    };

    return Movie;
  }
})();
