const minSubarrayLen = require('../minSubarrayLen.js');

describe('Return the length of a contiguous subarray of wich the sum is greater than or equal to a given number: "Sliding Window" Time:O(n) Space:O(1)', () => {
  test('[2,3,1,2,4,3], 7 : [4,3]=2', () => {
    expect(minSubarrayLen([2,3,1,2,4,3], 7)).toBe(2);
  });

  test('[2,1,6,5,4], 9 : [5,4]=2', () => {
    expect(minSubarrayLen([2,1,6,5,4], 9)).toBe(2);
  });

  test('[3,1,7,11,2,9,8,21,62,33,19], 52 : [62]=1', () => {
    expect(minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)).toBe(1);
  });

  test('[1,4,16,22,5,7,8,9,10], 39 : [16,22,5]=3', () => {
    expect(minSubarrayLen([1,4,16,22,5,7,8,9,10], 39)).toBe(3);
  });

  test('[1,4,16,22,5,7,8,9,10], 55 : [16,22,5,7,8]=5', () => {
    expect(minSubarrayLen([1,4,16,22,5,7,8,9,10], 55)).toBe(5);
  });

  test('[4,3,3,8,1,2,3], 11 : [3,8]=2', () => {
    expect(minSubarrayLen([4,3,3,8,1,2,3], 11)).toBe(2);
  });

  test('[1,4,16,22,5,7,8,9,10], 95 : 0', () => {
    expect(minSubarrayLen([1,4,16,22,5,7,8,9,10], 95)).toBe(0);
  });
});