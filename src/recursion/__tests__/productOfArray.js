const productOfArray = require('../productOfArray.js');

describe('Return the product of all the numbers in a given array', () => {
  test.each([
    [{}, 0],
    [[], 0],
    ['abc', 0],
    [[6], 6],
    [[1,2,3], 6],
    [[1,2,3,10], 60]
  ])(
    '%p : %i',
    (a, r) => expect(productOfArray(a)).toBe(r)
  );
});