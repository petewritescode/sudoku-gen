import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { getLayout } from './get-layout.util';
import { Layout } from '../../types/layout.type';
import { seedRandom } from '../../test-utils/seed-random.util';

describe('getLayout', () => {
  test('returns a layout shuffled and rotated randomly', () => {
    const expected1: Layout = [
      [56, 55, 54, 58, 59, 57, 60, 61, 62],
      [74, 73, 72, 76, 77, 75, 78, 79, 80],
      [65, 64, 63, 67, 68, 66, 69, 70, 71],
      [47, 46, 45, 49, 50, 48, 51, 52, 53],
      [38, 37, 36, 40, 41, 39, 42, 43, 44],
      [29, 28, 27, 31, 32, 30, 33, 34, 35],
      [20, 19, 18, 22, 23, 21, 24, 25, 26],
      [11, 10, 9, 13, 14, 12, 15, 16, 17],
      [2, 1, 0, 4, 5, 3, 6, 7, 8],
    ];

    const expected2: Layout = [
      [59, 68, 77, 14, 5, 23, 41, 50, 32],
      [58, 67, 76, 13, 4, 22, 40, 49, 31],
      [57, 66, 75, 12, 3, 21, 39, 48, 30],
      [54, 63, 72, 9, 0, 18, 36, 45, 27],
      [55, 64, 73, 10, 1, 19, 37, 46, 28],
      [56, 65, 74, 11, 2, 20, 38, 47, 29],
      [60, 69, 78, 15, 6, 24, 42, 51, 33],
      [62, 71, 80, 17, 8, 26, 44, 53, 35],
      [61, 70, 79, 16, 7, 25, 43, 52, 34],
    ];

    const expected3: Layout = [
      [26, 25, 24, 23, 22, 21, 19, 18, 20],
      [17, 16, 15, 14, 13, 12, 10, 9, 11],
      [8, 7, 6, 5, 4, 3, 1, 0, 2],
      [53, 52, 51, 50, 49, 48, 46, 45, 47],
      [44, 43, 42, 41, 40, 39, 37, 36, 38],
      [35, 34, 33, 32, 31, 30, 28, 27, 29],
      [62, 61, 60, 59, 58, 57, 55, 54, 56],
      [71, 70, 69, 68, 67, 66, 64, 63, 65],
      [80, 79, 78, 77, 76, 75, 73, 72, 74],
    ];

    seedRandom('lorem');
    expect(getLayout(BASE_LAYOUT)).toEqual(expected1);

    seedRandom('ipsum');
    expect(getLayout(BASE_LAYOUT)).toEqual(expected2);

    seedRandom('dolor');
    expect(getLayout(BASE_LAYOUT)).toEqual(expected3);
  });
});
