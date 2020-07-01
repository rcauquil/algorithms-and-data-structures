const power = require('../power.js');

describe('Return the power of the base to the exponent', () => {
  test.each([
    [2, 0, 1],
    [2, 2, 4],
    [2, 4, 16]
  ])(
    '%i,%i : %i',
    (a, b, r) => expect(power(a,b)).toBe(r)
  );
});