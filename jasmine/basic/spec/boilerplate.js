// the Syntax:
// Jasmine tests are primarily two parts: describe blocks and it blocks. 
// Both the describe and it functions take two parameters: a text string and a function. 
describe('Hello World', function () {
    it('says hello world', function () {
        expect(helloWorld()).toEqual('Hello World');
    });
    
    it("contails 'Hello'", function () {
        expect(helloWorld()).toContain('Hello');
    });
});