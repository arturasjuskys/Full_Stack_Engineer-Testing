var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('5! is equal to 120', () => {
      // Setup
      const input = 5;
      const expectedResult = 120;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });
    it('10! is equal to 3628800', () => {
      // Setup
      const input = 10;
      const expectedResult = 3628800;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });
    it('0! is equal to 0', () => {
      // Setup
      const input = 0;
      const expectedResult = 0;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expectedResult);
    });
  });
  
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      // Setup
      const expectedResult = 6;
      const inputArray = [1,2,3]
      
      // Exercise
      const result = Calculate.sum(inputArray)
      
      // Verify
      assert.equal(result, expectedResult);
    });
    
    it('returns the sum of a four item list', ()=>{
      // Setup
      const expectedResult = 22;
      const inputArray = [4,6,5,7];
      
      // Exercise
      const result = Calculate.sum(inputArray);
      
      // Verify
      assert.equal(result, expectedResult)
      
    });
    
    it('returns zero when the array is empty', ()=>{
      // Setup
      const expectedResult = 0;
      const inputArray = [];

      // Exercise
      const result = Calculate.sum(inputArray);

      // Verify
      assert.equal(result, expectedResult)
    });
  });
});
