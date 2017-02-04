(function() {
    describe("Test controller: caseInfoCtrl", function() {

        var $controller, $rootScope, scope, controller;
        beforeEach(module("articlesApp"));

        beforeEach(inject(function(_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        var initController = function() {
            scope = $rootScope.$new();

            controller = $controller("submitArticleCtrl", {
                '$scope': scope
            });
        };

        it("initializes controller", function() {
            initController();
            expect(controller).toBeDefined();
        });
    });
})();