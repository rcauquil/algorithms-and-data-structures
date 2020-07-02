const someRecursive = require('../someRecursive.js');

describe('Returns true if a single value in a given array returns true when passed to given callback', () => {
  const isOddMock = (n) => n % 2;
  const isSupTenMock = (n) => n > 10;
  
  test.each([
    [[1,2,3,4], isOddMock, true],
    [[4,6,8,9], isOddMock, true],
    [[4,6,8], isOddMock, false],
    [[4,6,8], isSupTenMock, false],
    [[5,9,21], isSupTenMock, true]
  ])(
    'test if %p %p to be %p',
    (a, b, r) => expect(someRecursive(a,b)).toBe(r)
  );

  test.each([
    [{}, isOddMock, false],
    ['foo', isOddMock, false],
    [123, isSupTenMock, false],
  ])(
    'To fail with non array first param',
    (a, b, r) => expect(someRecursive(a,b)).toBe(r)
  );
});