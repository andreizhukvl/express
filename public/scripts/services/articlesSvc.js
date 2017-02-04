angular.module('articlesApp')
.factory('articlesSvc', ['$http', 'appConfig', function($http, appConfig) {
    return {
        getArticles: getArticles,
        getArticle: getArticle,
        addArticle: addArticle,
        editArticle: editArticle
    };

    function getArticles() {
        return $http.get(appConfig.apiUrl + "articles");
    }

    function getArticle(articleId) {
        return $http.get(appConfig.apiUrl + "articles/article?_id=" + articleId);
    }

    function addArticle(article) {
        return $http.post(appConfig.apiUrl + "articles/add", article);
    }

    function editArticle(article) {
        return $http.post(appConfig.apiUrl + "articles/edit", article);
    }
}])