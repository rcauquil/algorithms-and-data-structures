/**
 * Return the power of the base to the exponent
 * 
 * @param {number} b base
 * @param {number} e exponent
 * @returns {number}
 */
function power(b, e) {
  if (e === 0) return 1;
  return b * power(b, e-1);
}

module.exports = power;