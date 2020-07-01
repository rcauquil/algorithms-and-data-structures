const reverse = require('../reverse.js');

describe('Return a reversed string', () => {
  test.each([
    [{}, null],
    [[], null],
    [120, null],
    ['', ''],
    ['awesome', 'emosewa'],
    ['rithmschool', 'loohcsmhtir']
  ])(
    '%p : %p',
    (a, r) => expect(reverse(a)).toBe(r)
  );
});