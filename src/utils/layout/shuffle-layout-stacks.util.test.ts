import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { Layout } from '../../types/layout.type';
import { seedRandom } from '../../test-utils/seed-random.util';
import { shuffleLayoutStacks } from './shuffle-layout-stacks.util';

describe('shuffleLayoutStacks', () => {
  test('randomly orders the layout stacks', () => {
    const expected1: Layout = [
      [3, 4, 5, 6, 7, 8, 0, 1, 2],
      [12, 13, 14, 15, 16, 17, 9, 10, 11],
      [21, 22, 23, 24, 25, 26, 18, 19, 20],
      [30, 31, 32, 33, 34, 35, 27, 28, 29],
      [39, 40, 41, 42, 43, 44, 36, 37, 38],
      [48, 49, 50, 51, 52, 53, 45, 46, 47],
      [57, 58, 59, 60, 61, 62, 54, 55, 56],
      [66, 67, 68, 69, 70, 71, 63, 64, 65],
      [75, 76, 77, 78, 79, 80, 72, 73, 74],
    ];

    const expected2: Layout = [
      [6, 7, 8, 3, 4, 5, 0, 1, 2],
      [15, 16, 17, 12, 13, 14, 9, 10, 11],
      [24, 25, 26, 21, 22, 23, 18, 19, 20],
      [33, 34, 35, 30, 31, 32, 27, 28, 29],
      [42, 43, 44, 39, 40, 41, 36, 37, 38],
      [51, 52, 53, 48, 49, 50, 45, 46, 47],
      [60, 61, 62, 57, 58, 59, 54, 55, 56],
      [69, 70, 71, 66, 67, 68, 63, 64, 65],
      [78, 79, 80, 75, 76, 77, 72, 73, 74],
    ];

    const expected3: Layout = [
      [3, 4, 5, 0, 1, 2, 6, 7, 8],
      [12, 13, 14, 9, 10, 11, 15, 16, 17],
      [21, 22, 23, 18, 19, 20, 24, 25, 26],
      [30, 31, 32, 27, 28, 29, 33, 34, 35],
      [39, 40, 41, 36, 37, 38, 42, 43, 44],
      [48, 49, 50, 45, 46, 47, 51, 52, 53],
      [57, 58, 59, 54, 55, 56, 60, 61, 62],
      [66, 67, 68, 63, 64, 65, 69, 70, 71],
      [75, 76, 77, 72, 73, 74, 78, 79, 80],
    ];

    seedRandom('lorem');
    expect(shuffleLayoutStacks(BASE_LAYOUT)).toEqual(expected1);

    seedRandom('ipsum');
    expect(shuffleLayoutStacks(BASE_LAYOUT)).toEqual(expected2);

    seedRandom('amet');
    expect(shuffleLayoutStacks(BASE_LAYOUT)).toEqual(expected3);
  });
});
