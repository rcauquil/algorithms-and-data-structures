/**
 * Return the factorial of a given number
 * ex: 4! = 24 (4*3*2*1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial;