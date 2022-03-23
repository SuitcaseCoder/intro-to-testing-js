// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


// describe('helloWorld function', function(){
//
//     // unit test 1
//     it('description of this unit test - should be a function', function(){
//         expect(typeof helloWorld()).toBe('function');
//     })
//
//     // unit test 2
//
//     it(' should return a type of string', function(){
//         expect(helloWorld()).toBe('string');
//     })
//
// })

describe('addTwoNumbers', function(){

    // unit test 1
    it('should return typeof number',function(){
        expect(addTwoNumbers()).toBe('number');
    })

    // // unit test 2
    // it('should be called addTwoNumbers', function(){
    //     expect(addTwoNumbers().name).toBe('addTwoNumbers')
    // })
})


















