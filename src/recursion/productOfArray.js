/**
 * Return the product of all the numbers in a given array
 *
 * @param {array} a 
 * @returns {number}
 */
function productOfArray(a) {
  if (a.length <= 1) return a[0] || 0;
  return a[0] * productOfArray(a.slice(1));
}

module.exports = productOfArray;