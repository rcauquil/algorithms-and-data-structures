const findLongestSubstring = require('../findLongestSubstring.js');

describe('Return the length of longest substring with all distinct chars: "Sliding Window" Time:O(n) Space:O(1)', () => {
  test('Empty string : 0', () => {
    expect(findLongestSubstring('')).toBe(0);
  });
  
  test('rithmschool : rithmsc=7', () => {
    expect(findLongestSubstring('rithmschool')).toBe(7);
  });

  test('thisisawesome : awesom=6', () => {
    expect(findLongestSubstring('thisisawesome')).toBe(6);
  });

  test('thecatinthehat : hecatin=7', () => {
    expect(findLongestSubstring('thecatinthehat')).toBe(7);
  });

  test('bbbbbb : b=1', () => {
    expect(findLongestSubstring('bbbbbb')).toBe(1);
  });

  test('longestsubstring : ubstring=8', () => {
    expect(findLongestSubstring('longestsubstring')).toBe(8);
  });

  test('thisishowwedoit : wedoit=6', () => {
    expect(findLongestSubstring('thisishowwedoit')).toBe(6);
  });
});