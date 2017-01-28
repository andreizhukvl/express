angular.module('articlesApp')
.filter("postTextFilter", [function() {
    return function(input) {
        if (input) {
            return input.substring(0, 2) + '...';
        }
        return;
    };
}])