const isPalindrome = require('../isPalindrome.js');

describe('Return true if the given string is a palindrome', () => {
  test('120 : false', () => {
    expect(isPalindrome(120)).toBe(false);
  });

  test(' : ', () => {
    expect(isPalindrome('')).toBe(true);
  });
  
  test('awesome : false', () => {
    expect(isPalindrome('awesome')).toBe(false);
  });

  test('america : false', () => {
    expect(isPalindrome('america')).toBe(false);
  });

  test('tacocat : true', () => {
    expect(isPalindrome('tacocat')).toBe(true);
  });

  test('amanaplanacanalpanama : true', () => {
    expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
  });

  test('amanaplanacanalpandemodium : false', () => {
    expect(isPalindrome('amanaplanacanalpandemodium')).toBe(false);
  });
});