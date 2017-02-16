(function() {
    describe("Filter: postTextFilter", function() {

        var $filter;
        beforeEach(module("articlesApp"));

        beforeEach(inject(function(_$filter_) {
            $filter = _$filter_;
        }));

        it("it shows first 10 letters of the text", function() {
            var text = "a really really large amount of text";
            var filter = $filter("postTextFilter");     

            var result = filter(text);
            var emptyResult = filter();

            expect(result).toBe(text.substring(0, 10) + '...');
            expect(emptyResult).not.toBeDefined();
        });
    });
})();