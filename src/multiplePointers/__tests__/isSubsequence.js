const isSubsequence = require('../isSubsequence.js');

describe('Check if chars in first strings form a subsequence of chars in second string: "Multiple Pointers": Time:O(N) Space:O(1)', () => {
  test('hello, hello world : true', () => {
    expect(isSubsequence('hello', 'hello world')).toBeTruthy();
  });

  test('sing, sting : true', () => {
    expect(isSubsequence('sing', 'sting')).toBeTruthy();
  });

  test('abc, abracadabra : true', () => {
    expect(isSubsequence('abc', 'abracadabra')).toBeTruthy();
  });

  test('abc, acb : false (order matters)', () => {
    expect(isSubsequence('abc', 'acb')).toBeFalsy();
  });

  test('foo : false', () => {
    expect(isSubsequence('foo')).toBeFalsy();
  });

  test('123, 124356 : false (only string)', () => {
    expect(isSubsequence(123, 124356)).toBeFalsy();
  });
});