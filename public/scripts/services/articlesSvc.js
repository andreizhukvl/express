angular.module('articlesApp')
.factory('articlesSvc', ['$http', 'appConfig', function($http, appConfig) {
    return {
        getArticles: getArticles
    };

    function getArticles() {
        return $http.get(appConfig.apiUrl + "articles");
    }
}])