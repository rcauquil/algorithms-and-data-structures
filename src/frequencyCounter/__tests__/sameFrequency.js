const sameFrequency = require('../sameFrequency.js');

describe('Check same frequency of digits for two given positive integers: "Frequency Counter" Time:O(n) Space:O(n)', () => {
  test.each([
    [182, 281, true],
    [34, 14, false],
    [3589758, 5879385, true],
    [22, 222, false]
  ])(
    '%i, %i : %p',
    (a, b, r) => expect(sameFrequency(a,b)).toBe(r)
  );
});