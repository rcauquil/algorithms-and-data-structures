/**
 * Compute the max sum of a given subarray length using:
 * "Sliding Window" Time:O(n) Space:O(1)
 * 
 * @param {Array}     a the array to parse 
 * @param {Number}    n length of the sub array
 * @returns {Number}  the max sum
 */
function maxSubarraySum(a, n) {
  // Condition
  if (!a.length || a.length < n) return null;

  // First window
  let maxSum = 0;  
  for (let i = 0; i < n; i++) {
    maxSum += a[i];
  }

  // Move the window to the end
  let tempSum = maxSum;
  for (let i = n; i < a.length; i++) {
    tempSum += a[i] - a[i-n];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;