const fibonacci = require('../fibonacci.js');

describe('Run a fibonacci sequence', () => {
  test('{} : 0', () => {
    expect(fibonacci({})).toBe(0);
  });

  test('[] : 0', () => {
    expect(fibonacci([])).toBe(0);
  });

  test('abc : 0', () => {
    expect(fibonacci('abc')).toBe(0);
  });

  test('0 : 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('4 : 3', () => {
    expect(fibonacci(4)).toBe(3);
  });

  test('10 : 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('28 : 317811', () => {
    expect(fibonacci(28)).toBe(317811);
  });

  test('35 : 9227465', () => {
    expect(fibonacci(35)).toBe(9227465);
  });
});