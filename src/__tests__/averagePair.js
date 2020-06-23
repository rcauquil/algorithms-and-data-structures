const averagePair = require('../averagePair.js');

describe('Check if a pair in a given ordered array match a given average: "Multiple Pointers" Time:O(n) Space:O(1)', () => {
  test('[1,2,3], 2,5 : true', () => {
    expect(averagePair([1,2,3], 2,5)).toBeTruthy();
  });

  test('[1,3,3,5,6,7,10,12,19], 8 : true', () => {
    expect(averagePair([1,3,3,5,6,7,10,12,19], 8)).toBeTruthy();
  });

  test('[-1,0,3,4,5,6], 4.1 : false', () => {
    expect(averagePair([-1,0,3,4,5,6], 4.1)).toBeFalsy();
  });

  test('[], 4 : false', () => {
    expect(averagePair([], 4)).toBeFalsy();
  });
});