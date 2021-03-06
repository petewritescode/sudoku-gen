import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { Layout } from '../../types/layout.type';
import { seedRandom } from '../../test-utils/seed-random.util';
import { shuffleLayoutColumns } from './shuffle-layout-columns.util';

describe('shuffleLayoutColumns', () => {
  test('randomly orders the layout columns', () => {
    const expected1: Layout = [
      [1, 2, 0, 5, 4, 3, 8, 6, 7],
      [10, 11, 9, 14, 13, 12, 17, 15, 16],
      [19, 20, 18, 23, 22, 21, 26, 24, 25],
      [28, 29, 27, 32, 31, 30, 35, 33, 34],
      [37, 38, 36, 41, 40, 39, 44, 42, 43],
      [46, 47, 45, 50, 49, 48, 53, 51, 52],
      [55, 56, 54, 59, 58, 57, 62, 60, 61],
      [64, 65, 63, 68, 67, 66, 71, 69, 70],
      [73, 74, 72, 77, 76, 75, 80, 78, 79],
    ];

    const expected2: Layout = [
      [2, 1, 0, 3, 4, 5, 8, 6, 7],
      [11, 10, 9, 12, 13, 14, 17, 15, 16],
      [20, 19, 18, 21, 22, 23, 26, 24, 25],
      [29, 28, 27, 30, 31, 32, 35, 33, 34],
      [38, 37, 36, 39, 40, 41, 44, 42, 43],
      [47, 46, 45, 48, 49, 50, 53, 51, 52],
      [56, 55, 54, 57, 58, 59, 62, 60, 61],
      [65, 64, 63, 66, 67, 68, 71, 69, 70],
      [74, 73, 72, 75, 76, 77, 80, 78, 79],
    ];

    const expected3: Layout = [
      [0, 1, 2, 5, 3, 4, 8, 6, 7],
      [9, 10, 11, 14, 12, 13, 17, 15, 16],
      [18, 19, 20, 23, 21, 22, 26, 24, 25],
      [27, 28, 29, 32, 30, 31, 35, 33, 34],
      [36, 37, 38, 41, 39, 40, 44, 42, 43],
      [45, 46, 47, 50, 48, 49, 53, 51, 52],
      [54, 55, 56, 59, 57, 58, 62, 60, 61],
      [63, 64, 65, 68, 66, 67, 71, 69, 70],
      [72, 73, 74, 77, 75, 76, 80, 78, 79],
    ];

    seedRandom('lorem');
    expect(shuffleLayoutColumns(BASE_LAYOUT)).toEqual(expected1);

    seedRandom('ipsum');
    expect(shuffleLayoutColumns(BASE_LAYOUT)).toEqual(expected2);

    seedRandom('dolor');
    expect(shuffleLayoutColumns(BASE_LAYOUT)).toEqual(expected3);
  });
});
