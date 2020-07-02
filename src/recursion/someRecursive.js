function someRecursive(a, fn, i=0) {
  if (!Array.isArray(a)) return false;
  if (i >= a.length) return false;
  return Boolean(fn(a[i])) || someRecursive(a, fn, i+1);
}

module.exports = someRecursive;