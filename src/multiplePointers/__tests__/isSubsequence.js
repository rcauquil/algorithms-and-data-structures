const isSubsequence = require('../isSubsequence.js');

describe('Check if chars in first strings form a subsequence of chars in second string: "Multiple Pointers": Time:O(N) Space:O(1)', () => {
  test.each([
    [{}, null, false],
    [[], null, false],
    [123, 124356, false],
    ['hello', 'hello world', true],
    ['sing', 'sting', true],
    ['abc', 'abracadabra', true],
    ['abc', 'acb', false],
    ['foo', null, false]
  ])(
    '%p : %p',
    (a, b, r) => expect(isSubsequence(a,b)).toBe(r)
  );
});