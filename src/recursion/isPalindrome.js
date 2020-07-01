/**
 * Return true if the given string is a palindrome
 * 
 * @param {string} a 
 * @returns {boolean}
 */
function isPalindrome(a) {
  if (typeof a !== 'string') return false;
  if (a.length <= 1) return true;
  return a[0] === a[a.length-1] ? isPalindrome(a.slice(1, -1)) : false;
}

module.exports = isPalindrome;