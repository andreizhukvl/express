var articlesApp = angular.module('articlesApp', [
  'ngRoute'
]).config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/articles', {
          template: '<article-list></article-list>'
        }).
        when('/articles/add', {
          template: '<article></article>'
        }).
        when('/articles/:articleId', {
          template: '<article></article>'
        }).
        otherwise('/articles');
}]);