angular.module('articlesApp')
.controller('addArticleCtrl', ['$location', function($location) {
    var vm = this;
    vm.onAdd = function() {
        $location.path("/articles/add");
    };
}]);