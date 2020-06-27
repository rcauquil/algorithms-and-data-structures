const recursiveRange = require('../recursiveRange.js');

describe('Adds up all the numbers from 0 to the given number', () => {
  test('{} : 0', () => {
    expect(recursiveRange({})).toBe(0);
  });

  test('[] : 0', () => {
    expect(recursiveRange([])).toBe(0);
  });

  test('abc : 0', () => {
    expect(recursiveRange('abc')).toBe(0);
  });

  test('0 : 0', () => {
    expect(recursiveRange(0)).toBe(0);
  });

  test('6 : 21', () => {
    expect(recursiveRange(6)).toBe(21);
  });

  test('10 : 55', () => {
    expect(recursiveRange(10)).toBe(55);
  });
});