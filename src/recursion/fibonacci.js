/**
 * Run a fibonacci sequence
 * Time:O(n) Space:O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function fibonacci(n) {
  if (typeof n !== 'number') return 0;
  const a = arguments[1] || 0;
  const b = arguments[2] || 1;
  return n ? fibonacci(n - 1, b, a + b) : a;
}

module.exports = fibonacci;