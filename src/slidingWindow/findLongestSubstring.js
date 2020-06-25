function findLongestSubstring(a) {
  let start = 0;
  let longest = 0;
  let lookup = {};
 
  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    if (lookup[char]) {
      start = Math.max(start, lookup[char]);
    }
    longest = Math.max(longest, i - start + 1);
    lookup[char] = i + 1; 
  }
  return longest;
}

module.exports = findLongestSubstring;