angular.module('articlesApp', [
  'ngRoute'
]).config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/articles', {
          template: '<article-list></article-list>'
        }).
        when('/articles/:articleId', {
          template: '<article-details></article-details>'
        }).
        otherwise('/articles');
}]);