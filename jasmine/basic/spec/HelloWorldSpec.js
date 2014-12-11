describe('Hello World', function () {
    it('says hello world', function () {
        expect(helloWorld()).toEqual('Hello World');
    });
    
    it("contails 'Hello'", function () {
        expect(helloWorld()).toContain('Hello');
    });
});