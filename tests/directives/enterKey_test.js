(function() {
    describe("Directive: enterKey", function() {

        var $rootScope, $compile, scope, element, $document, $eval;
        beforeEach(module("articlesApp"));

        beforeEach(inject(function(_$rootScope_, _$compile_, _$document_) {
            $rootScope = _$rootScope_;
            $compile = _$compile_;
            $document = _$document_;
        }));

        beforeEach(function() {
            scope = $rootScope.$new();
            scope.submitCallback = jasmine.createSpy('submitCallback');
            var elem = angular.element('<input enter-key="submitCallback()">');
            element = $compile(elem)(scope);
        });

        it("it invokes callback if enter is pressed", function() {
            var event = $document[0].createEvent('Event');
            event.initEvent("keydown", true, true);
            event.keyCode = 13;

            spyOn(scope, "$eval").and.callFake(function() {
                return scope.submitCallback;
            });

            element.triggerHandler(event);

            scope.$digest();

            expect(scope.submitCallback).toHaveBeenCalled();
        });

        it("it doesn't invokes callback if not enter key is pressed", function() {
            var event = $document[0].createEvent('Event');
            event.initEvent("keydown", true, true);
            event.keyCode = 123;

            spyOn(scope, "$eval").and.callFake(function() {
                return scope.submitCallback;
            });

            element.triggerHandler(event);

            scope.$digest();

            expect(scope.submitCallback).not.toHaveBeenCalled();
        });
    });
})();