(function() {
    describe("Service: articleSvc", function() {

        var $rootScope, articlesSvc, $httpBackend, appConfig, success = "success";
        beforeEach(module("articlesApp"));

        beforeEach(inject(function(_$rootScope_, _articlesSvc_, _$httpBackend_, _appConfig_) {
            $rootScope = _$rootScope_;
            articlesSvc = _articlesSvc_;
            $httpBackend = _$httpBackend_;
            appConfig = _appConfig_;
        }));

        // afterEach(function() {
        //     $httpBackend.verifyNoOutstandingExpectation();
        //     $httpBackend.verifyNoOutstandingRequest();
        // });


        it("it gets articles", function(done) {
            $httpBackend.expectGET(appConfig.articlesUrl).respond(200, success);

            articlesSvc.getArticles()
            .then(function(result) {
                expect(result.data).toBe(success);
            })
            .catch(function (error) {
                expect(error).toBeUndefined();
            })
            .finally(done);

            $httpBackend.flush();
        });

        it("it gets article", function(done) {
            var articleId = 3;

            $httpBackend.expectGET(appConfig.getArticleUrl + articleId).respond(200, success);

            articlesSvc.getArticle(articleId)
            .then(function(result) {
                expect(result.data).toBe(success);
            })
            .catch(function (error) {
                expect(error).toBeUndefined();
            })
            .finally(done);
            
            $httpBackend.flush();
        });

        it("it adds article", function(done) {
            $httpBackend.expectPOST(appConfig.addArticleUrl).respond(201, success);

            articlesSvc.addArticle({})
            .then(function(result) {
                expect(result.data).toBe(success);
            })
            .catch(function (error) {
                expect(error).toBeUndefined();
            })
            .finally(done);
            
            $httpBackend.flush();
        });

        it("it edits article", function(done) {
            $httpBackend.expectPOST(appConfig.editArticleUrl).respond(200, success);

            articlesSvc.editArticle({})
            .then(function(result) {
                expect(result.data).toBe(success);
            })
            .catch(function (error) {
                expect(error).toBeUndefined();
            })
            .finally(done);
            
            $httpBackend.flush();
        });
    });
})();