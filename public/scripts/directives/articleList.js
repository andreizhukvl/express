angular.module('articlesApp')
.component('articleList', {
    templateUrl: '/scripts/directives/articleList.html',
    controller: articleListController,
});

articleListController.$inject = ['articlesSvc'];
function articleListController(articlesSvc) {
    var vm = this;
    vm.$onInit = function() {

        articlesSvc.getArticles().then(function(response) {
            console.log(response);
            vm.articles = response.data;
        });
    };
}