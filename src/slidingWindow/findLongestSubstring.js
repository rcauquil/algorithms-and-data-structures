/**
 * Return the length of longest substring with all distinct chars
 * "Sliding Window" Time:O(n) Space:O(n)
 * 
 * @param {string} a
 * @returns {number}
 */
function findLongestSubstring(str) {
  let start = 0;
  let longest = 0;
  let indexes = {};
 
  for (let i = 0; i < str.length; i++) {
    // Vars
    let currChar = str[i];
    let nextChar = indexes[currChar] + 1 || 0; // 0 for first loop as indexes is not set yet
    // Replace start by nextChar if > than current start.
    // We are doing this to avoid double count
    start = Math.max(start, nextChar);
    // Current index - start + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);    
    // Set current char index
    indexes[currChar] = i;
  }
  return longest;
}

module.exports = findLongestSubstring;