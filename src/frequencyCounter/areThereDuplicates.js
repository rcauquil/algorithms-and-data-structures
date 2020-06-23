/**
 * Check if any duplicates among the arguments passed in
 * "Frequency Counter" Time:O(n) Space:O(1)
 * 
 * @params  {*}
 * @returns {Boolean}
 */
function areThereDuplicates() {
  let lookup = {};

  for (const v of arguments) {
    if (lookup[v]) {
      return true;
    } else {
      lookup[v] = true;
    }
  }   

  return false;
}

module.exports = areThereDuplicates;