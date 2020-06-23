const maxSubarraySum = require('../maxSubarraySum.js');

describe('Compute the max sum of a given subarray length using: "Sliding Window" Time:O(n) Space:O(1)', () => {
  test('[100,200,300,400], 2 : [300,400]=700', () => {
    expect(maxSubarraySum([100,200,300,400], 2)).toBe(700);
  });

  test('[1,4,2,10,23,3,1,0,20], 4 : [4,10,23,3]=39', () => {
    expect(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)).toBe(39);
  });

  test('[-3,4,0,-2,6,-1], 2 : [6,-1]=5', () => {
    expect(maxSubarraySum([-3,4,0,-2,6,-1], 2)).toBe(5);
  });

  test('[3,-2,7,-4,1,-1,4,-2,1], 2 : [-2,7]=5', () => {
    expect(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)).toBe(5);
  });

  test('[2,3], 3 : null', () => {
    expect(maxSubarraySum([2,3], 3)).toBe(null);
  });

  test('[], 2 : null', () => {
    expect(maxSubarraySum([], 2)).toBe(null);
  });
});