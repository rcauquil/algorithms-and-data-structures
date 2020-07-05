/**
 * Linear Search
 * Time:O(n) Space:O(1)
 * 
 * @param {array} a 
 * @param {number} b 
 * @returns {number}
 */
function linearSearch(a, b) {
  if (!a.length) return -1;
  for (let i=0; i<a.length; i++) {
    if (a[i] === b) return i;
  }
  return -1;
}

module.exports = linearSearch;