angular.module('articlesApp')
.constant("appConfig", getConfig());

function getConfig()    {
    return {
        apiUrl: "http://localhost:3000/",
        articlesUrl: "http://localhost:3000/articles",
        getArticleUrl: "http://localhost:3000/articles/article?_id=",
        addArticleUrl: "http://localhost:3000/articles/add",
        editArticleUrl: "http://localhost:3000/articles/edit"
    };
}