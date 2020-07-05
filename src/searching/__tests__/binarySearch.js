const binarySearch = require('../binarySearch');

describe('Binary search', () => {
  test('Find 2 at pos 1', () => expect(
    binarySearch([1,2,3,4,5], 2)
  ).toBe(1));

  test('Find 3 at pos 2', () => expect(
    binarySearch([1,2,3,4,5], 3)
  ).toBe(2));

  test('Find 10 at pos 2', () => expect(
    binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10)
  ).toBe(2));

  test('Find 95 at pos 16', () => expect(
    binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)
  ).toBe(16));

  test('Does not find anything', () => expect(
    binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100)
  ).toBe(-1));
});