(function() {
  'use strict';

  require('angular');
  require('bootstrap');
  require('angular-ui-router');
  require('angular-bootstrap');

  require('slick-carousel');
  require('angular-slick-carousel');

  var mediaAppVodApp = angular.module('mediaAppVodApp', [
      'ui.router',
      'ui.bootstrap',
      'slickCarousel'
    ])
    .config([
      '$urlRouterProvider',
      function($urlRouterProvider) {
        $urlRouterProvider.when('', '/');
      }
    ]);


  require('./services/MovieManager')(mediaAppVodApp);
  require('./services/HistoryManager')(mediaAppVodApp);
  require('./services/Player')(mediaAppVodApp);
  require('./services/Movie')(mediaAppVodApp);
  require('./views/list')(mediaAppVodApp);
  require('./views/history')(mediaAppVodApp);
})();
