(function() {
  var app = angular.module('meganote', [
    'ui.router',
    'meganote.notes'
  ]);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes');
  }

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  app.config(config);
})();
