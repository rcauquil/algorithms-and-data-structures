const factorial = require('../factorial.js');

describe('Return the factorial of a given number', () => {
  test.each([
    [0, 1],
    [1, 1],
    [2, 2],
    [4, 24],
    [7, 5040]
  ])(
    '%i : %i',
    (a, r) => expect(factorial(a)).toBe(r)
  );
});