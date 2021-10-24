const assert = require('assert');
const fs = require('fs');

// https://mochajs.org/
// https://nodejs.org/api/assert.html

/*

3 Pahse Testing - Setup, Exercise, and Verify
  Simple Example of testing with Mocha
    * Setup - create objects, variables, and set conditions that your test depends on
    * Exercise - execute the functionality you are testing
    * Verify - check your expectations against the result of the exercise phase. You can use the assert library here

*/

// assert.ok()
describe('+', () => {
  it('returns the sum of its arguments', () => {
    assert.ok(3 + 4 === 7);
  });
});
// assert.ok()
// assert.equal()
// assert.strictEqual()
describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.ok(result === expected);
    // assert.equal()
    assert.equal(result, expected);
    // assert.strictEqual()
    assert.strictEqual(result, expected);
    // more assert options...
    assert.notEqual(1, 2);
    // and more...
  });
});
// assert.deepEqual()
  // to compare values in different objects
describe('+ between Objects', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = {a: 3, b: 4, result: 7};
		let sum = {a: 3, b: 4};

    // Exercise
		sum.result = sum.a + sum.b;

    // Verify
    assert.deepEqual(sum, expected);
  });
});
describe('+ between Arrays', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = [3, 4, 7];
		let sum = [3, 4];

    // Exercise
		sum.push(3 + 4);

    // Verify
    assert.deepEqual(sum, expected);
  });
});

/*

assert.ok() vs assert.equal()
  in some cases there is no difference, it makes test more readable to human.

*/

// Naive approach
describe('.pop', () => {
  it('returns the last element in the array [naive]', () => {
    assert.ok((['padawan', 'knight']).pop() === 'knight'); 
  });
});

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});

/*

4 Phase Testing - Teardown
  * Setup - create objects, variables, and set conditions that your test depends on
  * Exercise - execute the functionality you are testing
  * Verify - check your expectations against the result of the exercise phase. You can use the assert library here
  * Teardown - reset any conditions that were changed during the test

  Some common changes to an environment include
    altering files and directory structure
    changing read and write permissions on a file
    editing records in a database

*/

describe('appendFileSync', () => {
  // this test checks if file does not exists, it creates new file and adds string into it. If file exists it appends the string
  const path = './message.txt';

  // hook
  afterEach(function() {
    // Teardown: delete path
    fs.unlinkSync(path);
  })

  it('writes a string to text file at given path name', () => {

    // Setup
    const str = 'Hello Node.js';
    
    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.ok(contents.toString() === str);

  });
});

/*

^^^^^^^^^^^^^^^^^^ example above
Hooks
  * before()
  * beforeEach()
  * after()
  * afterEach()

*/


