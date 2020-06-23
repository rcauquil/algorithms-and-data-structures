/**
 * Return the length of a contiguous subarray of wich the sum
 * is greater than or equalto a given number
 * "Sliding Window" Time:O(n) Space:O(1)
 * 
 * @param {Array}   a array of numbers
 * @param {Number}  n sum to match or exceed
 */
function minSubArrayLen(a, n) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < a.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if(total < n && end < a.length){
      total += a[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= n){
      minLen = Math.min(minLen, end-start);
      total -= a[start];
      start++;
    } 
    // current total less than required total but we reach the end
    // need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

module.exports = minSubArrayLen;