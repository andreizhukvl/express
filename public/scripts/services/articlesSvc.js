angular.module('articlesApp')
.factory('articlesSvc', ['$http', 'appConfig', function($http, appConfig) {
    return {
        getArticles: getArticles,
        getArticle: getArticle,
        addArticle: addArticle,
        editArticle: editArticle
    };
    
    function getArticles() {
        return $http.get(appConfig.articlesUrl);
    }

    function getArticle(articleId) {
        return $http.get(appConfig.getArticleUrl + articleId);
    }

    function addArticle(article) {
        return $http.post(appConfig.addArticleUrl, article);
    }

    function editArticle(article) {
        return $http.post(appConfig.editArticleUrl, article);
    }
}])