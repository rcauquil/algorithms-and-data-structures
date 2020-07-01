const { isPalindrome, isPalindromeSlice } = require('../isPalindrome.js');

describe('Return true if the given string is a palindrome', () => {
  test.each([
    [120, false],
    ['', true],
    ['awesome', false],
    ['america', false],
    ['tacocat', true],
    ['amanaplanacanalpanama', true],
    ['amanaplanacanalpandemodium', false]
  ])(
    '%p : %p',
    (a, r) => {
      expect(isPalindrome(a)).toBe(r);
      expect(isPalindromeSlice(a)).toBe(r);
    }
  );
});