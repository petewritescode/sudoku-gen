import { BASE_LAYOUT } from './base-layout.constant';

describe('BASE_LAYOUT constant', () => {
  test('is a 9x9 array of arrays', () => {
    expect(BASE_LAYOUT.length).toBe(9);
    expect(BASE_LAYOUT.every((row) => row.length === 9)).toBe(true);
  });

  test('contains the numbers 0 to 80 in order', () => {
    const numbers = BASE_LAYOUT.flat();
    expect(numbers.every((number, index) => number == index));
  });
});
