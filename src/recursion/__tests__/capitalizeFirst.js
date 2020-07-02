const capitalizeFirst = require('../capitalizeFirst.js');

describe('Given an array of strings, capitalize the first letter of each string in the array', () => {
  test.each([
    [['car', 'taco', 'banana'], ['Car', 'Taco', 'Banana']]
  ])(
    '%p : %p',
    (a, r) => expect(capitalizeFirst(a)).toEqual(r)
  );
  
  test.each([
    [123, []],
    ['foo', []],
    [{}, []]
  ])(
    'To be called with an array',
    (a, r) => expect(capitalizeFirst(a)).toEqual(r)
  );
});