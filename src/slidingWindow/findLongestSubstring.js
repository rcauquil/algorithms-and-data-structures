/**
 * Return the length of longest substring with all distinct chars
 * "Sliding Window" Time:O(n) Space:O(n)
 * 
 * @param {string} a
 * @returns {number}
 */
function findLongestSubstring(str) {
  let start = 0;
  let seenAt = {};
  let longest = 0;
 
  for (let i = 0; i < str.length; i++) {
    // Vars
    let char = str[i];
    if (seenAt[char]) {
      start = Math.max(start, seenAt[char]);
    }
    // Current index - start + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);    
    // Store the index of the next char to avoid double count
    seenAt[char] = i + 1;
  }
  return longest;
}

module.exports = findLongestSubstring;