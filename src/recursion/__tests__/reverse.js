const reverse = require('../reverse.js');

describe('Return a reversed string', () => {
  test('120 : null', () => {
    expect(reverse(120)).toBe(null);
  });

  test(' : ', () => {
    expect(reverse('')).toBe('');
  });
  
  test('awesome : emosewa', () => {
    expect(reverse('awesome')).toBe('emosewa');
  });

  test('rithmschool : loohcsmhtir', () => {
    expect(reverse('rithmschool')).toBe('loohcsmhtir');
  });
});