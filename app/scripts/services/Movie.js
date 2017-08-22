(function() {
  'use strict';

  module.exports = function(mediaAppVodApp) {
    /**
     * @ngdoc service
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
      load(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        for (var i in data.images) {
          if (data.images[i].type === 'cover') {
            this.cover = data.images[i].url;
            break;
          }
        }
        this.video = data.contents[0];
      }
    };

    return Movie;
  }
})();
