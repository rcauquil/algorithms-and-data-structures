/**
 * Returns true if a single value in a given array returns true when passed to given callback
 * 
 * @param {array} a 
 * @param {function} fn 
 * @param {number} i internal only, do not set 
 * @returns {boolean}
 */
function someRecursive(a, fn, i=0) {
  if (!Array.isArray(a)) return false;
  if (i >= a.length) return false;
  return Boolean(fn(a[i])) || someRecursive(a, fn, i+1);
}

module.exports = someRecursive;