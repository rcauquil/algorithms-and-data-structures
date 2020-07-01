const fibonacci = require('../fibonacci.js');

describe('Run a fibonacci sequence', () => {
  test.each([
    [{}, 0],
    [[], 0],
    ['abc', 0],
    [0, 0],
    [4, 3],
    [10, 55],
    [28, 317811],
    [35, 9227465]
  ])(
    '%p : %i',
    (a, r) => expect(fibonacci(a)).toBe(r)
  );
});