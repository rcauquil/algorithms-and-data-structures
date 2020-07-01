const findLongestSubstring = require('../findLongestSubstring.js');

describe('Return the length of longest substring with all distinct chars: "Sliding Window" Time:O(n) Space:O(n)', () => {
  test.each([
    ['', 0],
    ['rithmschool', 7], // rithmsc
    ['thisisawesome', 6], // awesom
    ['thecatinthehat', 7], // hecatin
    ['bbbbbb', 1], // b
    ['longestsubstring', 8], // ubstring
    ['thisishowwedoit', 6] // wedoit
  ])(
    '%s : %i',
    (a, r) => expect(findLongestSubstring(a)).toBe(r)
  );
});