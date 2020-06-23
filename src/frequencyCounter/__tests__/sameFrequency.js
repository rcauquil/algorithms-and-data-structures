const sameFrequency = require('../sameFrequency.js');

describe('Check same frequency of digits for two given positive integers: "Frequency Counter" Time:O(n) Space:O(n)', () => {
  test('182, 281 : true', () => {
    expect(sameFrequency(182, 281)).toBeTruthy();
  });

  test('34, 14 : false', () => {
    expect(sameFrequency(34, 14)).toBeFalsy();
  });

  test('3589758, 5879385 : true', () => {
    expect(sameFrequency(3589758, 5879385)).toBeTruthy();
  });

  test('22, 222 : false', () => {
    expect(sameFrequency(22, 222)).toBeFalsy();
  });
});