angular.module('articlesApp')
.component('articleDetails', {
    templateUrl: '/scripts/directives/articleDetails.html',
    controller: articleDetailsController,
    bindings: {
        articleItem: '='
    }
});

articleDetailsController.$inject = ['$location', '$routeParams'];
function articleDetailsController($location, $routeParams) {
    var vm = this;
    vm.$onInit = function() {
        console.log(vm.articleItem);
    };
    vm.onEdit = function() {
        $location.path("/articles/" + vm.articleItem._id);
    };
}