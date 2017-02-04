angular.module('articlesApp')
.component('articleDetails', {
    templateUrl: '/scripts/components/articleDetails.html',
    controller: articleDetailsController,
    bindings: {
        articleItem: '='
    }
});

articleDetailsController.$inject = ['$location', '$routeParams'];
function articleDetailsController($location, $routeParams) {
    var vm = this;

    vm.onEdit = function() {
        $location.path("/articles/" + vm.articleItem._id);
    };
}