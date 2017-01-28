angular.module('articlesApp')
.directive('enterKey', enterKeyDirective);

function enterKeyDirective() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on("keydown", function(e) {
                if (e.keyCode == 13) {
                    var callback = scope.$eval(attrs.enterKey);
                    if (callback){
                        callback();
                    }
                }
            });
        }
    };
}