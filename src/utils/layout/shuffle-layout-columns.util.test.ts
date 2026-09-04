import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { Layout } from '../../types/layout.type';
import { seedRandom } from '../../test-utils/seed-random.util';
import { shuffleLayoutColumns } from './shuffle-layout-columns.util';

describe('shuffleLayoutColumns', () => {
  test('randomly orders the layout columns', () => {
    const expected1: Layout = [
      [1, 0, 2, 5, 3, 4, 6, 8, 7],
      [10, 9, 11, 14, 12, 13, 15, 17, 16],
      [19, 18, 20, 23, 21, 22, 24, 26, 25],
      [28, 27, 29, 32, 30, 31, 33, 35, 34],
      [37, 36, 38, 41, 39, 40, 42, 44, 43],
      [46, 45, 47, 50, 48, 49, 51, 53, 52],
      [55, 54, 56, 59, 57, 58, 60, 62, 61],
      [64, 63, 65, 68, 66, 67, 69, 71, 70],
      [73, 72, 74, 77, 75, 76, 78, 80, 79],
    ];

    const expected2: Layout = [
      [0, 1, 2, 5, 4, 3, 8, 6, 7],
      [9, 10, 11, 14, 13, 12, 17, 15, 16],
      [18, 19, 20, 23, 22, 21, 26, 24, 25],
      [27, 28, 29, 32, 31, 30, 35, 33, 34],
      [36, 37, 38, 41, 40, 39, 44, 42, 43],
      [45, 46, 47, 50, 49, 48, 53, 51, 52],
      [54, 55, 56, 59, 58, 57, 62, 60, 61],
      [63, 64, 65, 68, 67, 66, 71, 69, 70],
      [72, 73, 74, 77, 76, 75, 80, 78, 79],
    ];

    const expected3: Layout = [
      [1, 2, 0, 3, 5, 4, 6, 7, 8],
      [10, 11, 9, 12, 14, 13, 15, 16, 17],
      [19, 20, 18, 21, 23, 22, 24, 25, 26],
      [28, 29, 27, 30, 32, 31, 33, 34, 35],
      [37, 38, 36, 39, 41, 40, 42, 43, 44],
      [46, 47, 45, 48, 50, 49, 51, 52, 53],
      [55, 56, 54, 57, 59, 58, 60, 61, 62],
      [64, 65, 63, 66, 68, 67, 69, 70, 71],
      [73, 74, 72, 75, 77, 76, 78, 79, 80],
    ];

    seedRandom('lorem');
    expect(shuffleLayoutColumns(BASE_LAYOUT)).toEqual(expected1);

    seedRandom('ipsum');
    expect(shuffleLayoutColumns(BASE_LAYOUT)).toEqual(expected2);

    seedRandom('dolor');
    expect(shuffleLayoutColumns(BASE_LAYOUT)).toEqual(expected3);
  });
});
