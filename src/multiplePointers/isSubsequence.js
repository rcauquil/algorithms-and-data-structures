/**
 * Check if chars in first strings form a subsequence of chars in second string
 * "Multiple Pointers": Time:O(N) Space:O(1)
 * 
 * @param {String} str1 
 * @param {String} str2 
 * @returns {Boolean}
 */
function isSubsequence(str1, str2) {
  if (!str1 || !str2) return false;
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return false;

  let i = 0;
  let j = 0;
  
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  
  return false;
}

module.exports = isSubsequence;