import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { getLayout } from './get-layout.util';
import { Layout } from '../../types/layout.type';
import { seedRandom } from '../../test-utils/seed-random.util';

describe('getLayout', () => {
  test('returns a layout shuffled and rotated randomly', () => {
    const expected1: Layout = [
      [10, 9, 11, 13, 12, 14, 15, 16, 17],
      [19, 18, 20, 22, 21, 23, 24, 25, 26],
      [1, 0, 2, 4, 3, 5, 6, 7, 8],
      [46, 45, 47, 49, 48, 50, 51, 52, 53],
      [37, 36, 38, 40, 39, 41, 42, 43, 44],
      [28, 27, 29, 31, 30, 32, 33, 34, 35],
      [64, 63, 65, 67, 66, 68, 69, 70, 71],
      [73, 72, 74, 76, 75, 77, 78, 79, 80],
      [55, 54, 56, 58, 57, 59, 60, 61, 62],
    ];

    const expected2: Layout = [
      [45, 36, 27, 9, 0, 18, 54, 63, 72],
      [46, 37, 28, 10, 1, 19, 55, 64, 73],
      [47, 38, 29, 11, 2, 20, 56, 65, 74],
      [53, 44, 35, 17, 8, 26, 62, 71, 80],
      [51, 42, 33, 15, 6, 24, 60, 69, 78],
      [52, 43, 34, 16, 7, 25, 61, 70, 79],
      [48, 39, 30, 12, 3, 21, 57, 66, 75],
      [49, 40, 31, 13, 4, 22, 58, 67, 76],
      [50, 41, 32, 14, 5, 23, 59, 68, 77],
    ];

    const expected3: Layout = [
      [45, 46, 47, 53, 51, 52, 49, 48, 50],
      [27, 28, 29, 35, 33, 34, 31, 30, 32],
      [36, 37, 38, 44, 42, 43, 40, 39, 41],
      [54, 55, 56, 62, 60, 61, 58, 57, 59],
      [63, 64, 65, 71, 69, 70, 67, 66, 68],
      [72, 73, 74, 80, 78, 79, 76, 75, 77],
      [9, 10, 11, 17, 15, 16, 13, 12, 14],
      [0, 1, 2, 8, 6, 7, 4, 3, 5],
      [18, 19, 20, 26, 24, 25, 22, 21, 23],
    ];

    seedRandom('lorem');
    expect(getLayout(BASE_LAYOUT)).toEqual(expected1);

    seedRandom('ipsum');
    expect(getLayout(BASE_LAYOUT)).toEqual(expected2);

    seedRandom('dolor');
    expect(getLayout(BASE_LAYOUT)).toEqual(expected3);
  });
});
