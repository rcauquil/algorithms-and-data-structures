const productOfArray = require('../productOfArray.js');

describe('Return the product of all the numbers in a given array', () => {
  test('[] : 0', () => {
    expect(productOfArray([])).toBe(0);
  });

  test('[6] : 0', () => {
    expect(productOfArray([6])).toBe(6);
  });

  test('[1,2,3] : 6', () => {
    expect(productOfArray([1,2,3])).toBe(6);
  });

  test('[1,2,3,10] : 60', () => {
    expect(productOfArray([1,2,3,10])).toBe(60);
  });
});