angular.module('articlesApp')
.filter("postTextFilter", [function() {
    return function(input) {
        if (input) {
            return input.substring(0, 10) + '...';
        }
        return;
    };
}])