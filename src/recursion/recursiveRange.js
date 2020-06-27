/**
 * Adds up all the numbers from 0 to the given number
 * 
 * @param {number} n 
 * @returns {number}
 */
function recursiveRange(n) {
  if (!n || typeof n !== 'number') return 0;
  return n + recursiveRange(n - 1);
}

module.exports = recursiveRange;