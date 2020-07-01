/**
 * Return true if the given string is a palindrome
 * Using indexes
 * 
 * @param {string} a 
 * @returns {boolean}
 */
function isPalindrome(a, i=0) {
  if (typeof a !== 'string') return false;  
  if (a.length <= 1) return true;  
  return a[i] === a[a.length-(i+1)]
    ? i === a.length-1 || isPalindrome(a, i+1)
    : false;
}

/**
 * Return true if the given string is a palindrome
 * Using slice to chunck the given string
 * 
 * @param {string} a 
 * @returns {boolean}
 */
function isPalindromeSlice(a) {
  if (typeof a !== 'string') return false;
  if (a.length <= 1) return true;
  return a[0] === a[a.length-1]
    ? isPalindrome(a.slice(1, -1))
    : false;
}

module.exports = { 
  isPalindrome,
  isPalindromeSlice
};