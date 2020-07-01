const averagePair = require('../averagePair.js');

describe('Check if a pair in a given ordered array match a given average: "Multiple Pointers" Time:O(n) Space:O(1)', () => {
  test.each([
    ['abc', null, false],
    [{}, null, false],
    [[], null, false],
    [[], 4, false],
    [[1,2,3], 2.5, true],
    [[1,3,3,5,6,7,10,12,19], 8, true],
    [[-1,0,3,4,5,6], 4.1, false]
  ])(
    '%p, %p : %p',
    (a, b, r) => expect(averagePair(a, b)).toBe(r)
  );
});