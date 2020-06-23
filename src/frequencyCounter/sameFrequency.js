/**
 * Check same frequency of digits for two given positive integers
 * Frequency Counter" Time:O(n) Space:O(n)
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Boolean}
 */
function sameFrequency(a, b){
  let lookup = {};
  
  for (const v of a.toString()) {
    lookup[v] = (lookup[v] || 0) + 1;
  }
  
  for (const v of b.toString()) {
    if (!lookup[v]) {
      return false;
    } else {
      lookup[v]--;
    }
  }
  
  return true;
}

module.exports = sameFrequency;