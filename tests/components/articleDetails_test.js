(function() {
    describe("Component: articleDetails", function() {

        var $componentController, $rootScope, scope, controller, $location;
        beforeEach(module("articlesApp"));

        beforeEach(inject(function(_$componentController_, _$rootScope_, _$location_) {
            $componentController = _$componentController_;
            $rootScope = _$rootScope_;
            $location = _$location_;
        }));

        var initController = function() {
            scope = $rootScope.$new();
            $componentController = $componentController("articleDetails", {
                scope: scope
            } );
        };

        it("it goes to edit page ", function() {
            var articleId = 3;

            initController();
            $componentController.articleItem = { _id: articleId };            

            $componentController.onEdit();
            var currentPath = $location.path();

            expect(currentPath).toBe("/articles/" + articleId);
        });
    });
})();