/**
 * Return a reversed string 

 * @param {string} a string to reverse
 * @returns {string} reversed string
 */
function reverse(a) {
  if (typeof a !== 'string') return null;
  if (a.length <= 1) return a;
  return reverse(a.slice(1)) + a[0];
}

module.exports = reverse;