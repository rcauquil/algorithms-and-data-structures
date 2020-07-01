/**
 * Run a fibonacci sequence
 * Time:O(n) Space:O(1)
 * 
 * @param {number} n 
 * @param {number} a n-1
 * @param {number} b n-2
 * @returns {number}
 */
function fibonacci(n, a=0, b=1) {
  if (typeof n !== 'number') return 0;
  return n ? fibonacci(n - 1, b, a + b) : a;
}

module.exports = fibonacci;