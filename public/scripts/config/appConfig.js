angular.module('articlesApp')
.constant("appConfig", getConfig());

function getConfig()    {
    return {
        apiUrl: "http://localhost:3000/"
    };
}