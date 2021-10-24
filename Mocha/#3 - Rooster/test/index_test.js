const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup
      const expected = 'cock-a-doodle-doo!';

      // Exercise
      const actual = Rooster.announceDawn();

      // Verify
      assert.strictEqual(actual, expected);
    });
  });
  describe('.timeAtDown', () => {
    it('returns its argument as a string', () => {
      // Setup
      const inputNumber = 5;
      const expected = '5';

      // Exercise
      const actual = Rooster.timeAtDawn(inputNumber);

      // Verify
      assert.strictEqual(actual, expected);
    });
    it('throws an error if passed a number less then 0', () => {
      // Setup
      const inputNumber = -1;
      const expected = RangeError;

      // Exercise
        // This step is defined at 'Verify' stage and not here, not to confuse and do unnecessarily compplicated code

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
    it('throws an error if passed a number greater then 23', () => {
      // Setup
      const inputNumber = 24;
      const expected = RangeError;

      // Exercise
        // This step is defined at 'Verify' stage and not here, not to confuse and do unnecessarily compplicated code

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
  });
});