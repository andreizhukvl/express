(function() {
    describe("Component: articleList", function() {

        var $componentController, $rootScope, scope, articlesSvc, $q, deferred;
        beforeEach(module("articlesApp"));

        beforeEach(inject(function(_$componentController_, _$rootScope_, _articlesSvc_, _$q_) {
            $componentController = _$componentController_;
            $rootScope = _$rootScope_;
            articlesSvc = _articlesSvc_;
            $q = _$q_;
        }));

        var init = function() {
            scope = $rootScope.$new();
            $componentController = $componentController("articleList", { scope: scope} );
            deferred = $q.defer();
        };

        it("initializes controller", function() {
            init();
            expect($componentController).toBeDefined();
        });

        it("it loads articles on init", function() {
            var fakeArticles = { data: [1, 2, 3] };

            init();

            spyOn(articlesSvc, "getArticles").and.callFake(function() {
                return $q.when(fakeArticles);
            });

            $componentController.$onInit();

            $rootScope.$apply();

            expect(articlesSvc.getArticles).toHaveBeenCalled();
            expect($componentController.articles).toBe(fakeArticles.data);
        });
    });
})();