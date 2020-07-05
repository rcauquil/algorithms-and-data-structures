/**
 * Binary Search
 * "Multiple Pointers" Time:O(log n) Space:O(1)
 * /!\ only works on a sorted array
 * 
 * @param {array} a 
 * @param {number} b 
 */
function binarySearch(a, b) {
  let s = 0; // start
  let e = a.length - 1; // end
  var m = Math.floor((s + e) / 2); // middle
  while (a[m] !== b && s <= e) {
    if (b < a[m]) e = m - 1;
    else s = m + 1;
    m = Math.floor((s + e) / 2);
  }
  return a[m] === b ? m : -1;
}

module.exports = binarySearch;