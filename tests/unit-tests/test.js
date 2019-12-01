const expect = require("chai").expect;
const factorial = require("../../routes/index").factorial;


describe("#routeIndex", ()=>{
    context("With positive integer argument", ()=>{
        it("should return a positive factorial value", ()=>{
            expect(factorial(1)).to.equal(1);
            expect(factorial(2)).to.equal(2);
            expect(factorial(3)).to.equal(6);
            expect(factorial(4)).to.equal(24);
        });
    });
});