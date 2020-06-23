const areThereDuplicates = require('../areThereDuplicates.js');

describe('Check if any duplicates among the arguments passed in: "Frequency Counter" Time:O(n) Space:O(1)', () => {
  test('1, 2, 3 : false', () => {
    expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
  });

  test('1, 2, 2 : true', () => {
    expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
  });

  test('a, b, c, a : true', () => {
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy();
  });
});