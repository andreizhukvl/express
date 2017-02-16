(function() {
    describe("Test controller: addArticleCtrl", function() {

        var $controller, $rootScope, scope, controller, $location;
        beforeEach(module("articlesApp"));

        beforeEach(inject(function(_$controller_, _$rootScope_, _$location_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            $location = _$location_;
        }));

        var initController = function() {
            scope = $rootScope.$new();

            controller = $controller("addArticleCtrl", {
                $scope: scope
            });
        };

        it("redirects to add page", function() {
            initController();
            $location.path("/articles");

            controller.onAdd();

            expect($location.path()).toBe("/articles/add");
        });
    });
})();