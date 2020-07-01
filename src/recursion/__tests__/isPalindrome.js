const { isPalindrome, isPalindromeSlice } = require('../isPalindrome.js');

describe('Return true if the given string is a palindrome', () => {
  test('120 : false', () => {
    expect(isPalindrome(120)).toBe(false);
    expect(isPalindromeSlice(120)).toBe(false);
  });

  test(' : ', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindromeSlice('')).toBe(true);
  });
  
  test('awesome : false', () => {
    expect(isPalindrome('awesome')).toBe(false);
    expect(isPalindromeSlice('awesome')).toBe(false);
  }); 

  test('america : false', () => {
    expect(isPalindrome('america')).toBe(false);
    expect(isPalindromeSlice('america')).toBe(false);
  });

  test('tacocat : true', () => {
    expect(isPalindrome('tacocat')).toBe(true);
    expect(isPalindromeSlice('tacocat')).toBe(true);
  });

  test('amanaplanacanalpanama : true', () => {
    expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
    expect(isPalindromeSlice('amanaplanacanalpanama')).toBe(true);
  });

  test('amanaplanacanalpandemodium : false', () => {
    expect(isPalindrome('amanaplanacanalpandemodium')).toBe(false);
    expect(isPalindromeSlice('amanaplanacanalpandemodium')).toBe(false);
  });
});