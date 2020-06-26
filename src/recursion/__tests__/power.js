const power = require('../power.js');

describe('Return the power of the base to the exponent', () => {
  test('2,0 : 1', () => {
    expect(power(2,0)).toBe(1);
  });

  test('2,2 : 4', () => {
    expect(power(2,2)).toBe(4);
  });

  test('2,4 : 6', () => {
    expect(power(2,4)).toBe(16);
  });
});