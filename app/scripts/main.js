(function(){
    'use strict';

    require('angular');
    require('bootstrap');

    var mediaAppVodApp = angular.module('mediaAppVodApp', []);
    require('./services/MovieManager')(mediaAppVodApp);
    require('./controllers/movieListController.js')(mediaAppVodApp);
})();
