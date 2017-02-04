angular.module('articlesApp')
.component('article', {
    templateUrl: '/scripts/components/article.html',
    controller: articleController,
});

articleController.$inject = ['$location', '$routeParams', 'articlesSvc'];
function articleController($location, $routeParams, articlesSvc) {
    var vm = this;

    vm.picFile = null;
    vm.$onInit = function() {
        articlesSvc.getArticle($routeParams.articleId).then(function(response) {
            vm.article = response.data;
        });
    };

    vm.onSubmit = function() {
        if (this.article._id) {
            articlesSvc.editArticle(this.article).then(function(response) {
                if (response.data.success) {
                    $location.path("/articles");
                }
            })
        }
        else {
            articlesSvc.addArticle(this.article).then(function(response) {
                if (response.data.success) {
                    $location.path("/articles");
                }
            })
        }
    };
}