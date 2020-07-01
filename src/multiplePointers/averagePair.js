/**
 * Check if a pair in a given ordered array match a given average
 * "Multiple Pointers" Time:O(n) Space:O(1)
 * 
 * @param {Array}   a 
 * @param {Number}  n average to look for
 * @returns {Boolean}
 */
function averagePair(a, n){
  if (!Array.isArray(a)) return false;
  let start = 0;
  let end = a.length - 1;
  
  while(start < end) {
    const avg = (a[start] + a[end]) / 2;
    if (avg === n) return true;
    if (avg < n) start++;
    if (avg > n) end--;
  }
  
  return false;
}

module.exports = averagePair;