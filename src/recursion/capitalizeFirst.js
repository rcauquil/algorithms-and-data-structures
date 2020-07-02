/**
 * Given an array of strings, capitalize the first letter of each string in the array
 * 
 * @param {array}   a array of string
 * @param {array}   r internal only, new array
 * @param {number}  i internal only, index
 * @returns {array}
 */
function capitalizeFirst(a, r=[], i=0) {
  if (!a.length || !Array.isArray(a)) return r;
  if (r.length < a.length) {
    const s = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    return capitalizeFirst(a, r.concat([s]), i+1);
  } else {
    return r;
  }
}

module.exports = capitalizeFirst;