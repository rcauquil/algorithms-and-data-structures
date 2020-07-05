const linearSearch = require('../linearSearch');

describe('Linear search', () => {
  test('Find 3 at pos 2', () => expect(
    linearSearch([1,2,3,4,5,6,7,8,9,10], 3)
  ).toBe(2));

  test('Find 15 at pos 1', () => expect(
    linearSearch([10,15,20,25,30], 15)
  ).toBe(1));

  test('Do not find anything', () => expect(
    linearSearch([9,8,7,6,5,4,3,2,1,0], 10)
  ).toBe(-1));
});