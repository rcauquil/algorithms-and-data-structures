const recursiveRange = require('../recursiveRange.js');

describe('Adds up all the numbers from 0 to the given number', () => {
  test.each([
    [{}, 0],
    [[], 0],
    ['abc', 0],
    [0, 0],
    [6, 21],
    [10, 55]
  ])(
    '%p : %i',
    (a, r) => expect(recursiveRange(a)).toBe(r)
  );
});