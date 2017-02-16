(function() {
    describe("Component: article", function() {

        var $componentController, $rootScope, scope, controller, articlesSvc, $q, deferred, $routeParams, $location;
        beforeEach(module("articlesApp"));

        beforeEach(inject(function(_$componentController_, _$rootScope_, _articlesSvc_, _$q_, _$routeParams_, _$location_) {
            $componentController = _$componentController_;
            $rootScope = _$rootScope_;
            articlesSvc = _articlesSvc_;
            $q = _$q_;
            $routeParams = _$routeParams_;
            $location = _$location_;
        }));

        var initController = function() {
            scope = $rootScope.$new();
            $componentController = $componentController("article", { scope: scope} );
            deferred = $q.defer();
        };

        it("it edits article and redirects to articles list", function() {
            var articleId = 5, currentPath;
            var fakeArticle = { data: { _id: articleId } };
            var fakeResponse = { data: { success: true } };

            initController();
            $routeParams.articleId = articleId;
            $location.path("/articles/" + articleId);

            spyOn(articlesSvc, "getArticle").and.callFake(function() {
                return $q.when(fakeArticle);
            });

            $componentController.$onInit();

            $rootScope.$apply();

            spyOn(articlesSvc, "editArticle").and.callFake(function() {
                return $q.when(fakeResponse);
            });

            $componentController.onSubmit();

            $rootScope.$apply();

            currentPath = $location.path();

            expect(articlesSvc.getArticle).toHaveBeenCalled();
            expect(articlesSvc.editArticle).toHaveBeenCalled();
            expect(currentPath).toBe("/articles");
            expect($componentController.article).toBe(fakeArticle.data);
        });

        it("it submits article in edit mode and doesn't redirect to articles list due to server error", function() {
            var articleId = 5, currentPath;
            var fakeArticle = { data: { _id: articleId } };
            var fakeResponse = { data: { success: false } };

            initController();
            $routeParams.articleId = articleId;
            $location.path("/articles/" + articleId);

            spyOn(articlesSvc, "getArticle").and.callFake(function() {
                return $q.when(fakeArticle);
            });

            $componentController.$onInit();

            $rootScope.$apply();

            spyOn(articlesSvc, "editArticle").and.callFake(function() {
                return $q.when(fakeResponse);
            });

            $componentController.onSubmit();

            $rootScope.$apply();

            currentPath = $location.path();

            expect(articlesSvc.getArticle).toHaveBeenCalled();
            expect(articlesSvc.editArticle).toHaveBeenCalled();
            expect(currentPath).not.toBe("/articles");
            expect($componentController.article).toBe(fakeArticle.data);
        });

        it("it adds article and redirects to article list", function() {
            var currentPath;
            var fakeResponse = { data: { success: true } };

            initController();
            $location.path("/articles/add");

            $componentController.article = {};
            $componentController.$onInit();

            $rootScope.$apply();

            spyOn(articlesSvc, "addArticle").and.callFake(function() {
                return $q.when(fakeResponse);
            });

            $componentController.onSubmit();

            $rootScope.$apply();

            currentPath = $location.path();

            expect(articlesSvc.addArticle).toHaveBeenCalled();
            expect(currentPath).toBe("/articles");
        });

        it("it submits article in add mode and doesn't redirect to articles list due to server error", function() {
            var currentPath;
            var fakeResponse = { data: { success: false } };

            initController();
            $location.path("/articles/add");

            $componentController.article = {};
            $componentController.$onInit();

            $rootScope.$apply();

            spyOn(articlesSvc, "addArticle").and.callFake(function() {
                return $q.when(fakeResponse);
            });

            $componentController.onSubmit();

            $rootScope.$apply();

            currentPath = $location.path();

            expect(articlesSvc.addArticle).toHaveBeenCalled();
            expect(currentPath).not.toBe("/articles");
        });
    });
})();