import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { Layout } from '../../types/layout.type';
import { seedRandom } from '../../test-utils/seed-random.util';
import { shuffleLayout } from './shuffle-layout.util';

describe('shuffleLayout', () => {
  test('returns the layout shuffled randomly', () => {
    const expected1: Layout = [
      [35, 33, 34, 28, 29, 27, 32, 30, 31],
      [53, 51, 52, 46, 47, 45, 50, 48, 49],
      [44, 42, 43, 37, 38, 36, 41, 39, 40],
      [26, 24, 25, 19, 20, 18, 23, 21, 22],
      [17, 15, 16, 10, 11, 9, 14, 12, 13],
      [8, 6, 7, 1, 2, 0, 5, 3, 4],
      [62, 60, 61, 55, 56, 54, 59, 57, 58],
      [71, 69, 70, 64, 65, 63, 68, 66, 67],
      [80, 78, 79, 73, 74, 72, 77, 75, 76],
    ];

    const expected2: Layout = [
      [25, 24, 26, 21, 22, 23, 18, 20, 19],
      [7, 6, 8, 3, 4, 5, 0, 2, 1],
      [16, 15, 17, 12, 13, 14, 9, 11, 10],
      [34, 33, 35, 30, 31, 32, 27, 29, 28],
      [52, 51, 53, 48, 49, 50, 45, 47, 46],
      [43, 42, 44, 39, 40, 41, 36, 38, 37],
      [79, 78, 80, 75, 76, 77, 72, 74, 73],
      [61, 60, 62, 57, 58, 59, 54, 56, 55],
      [70, 69, 71, 66, 67, 68, 63, 65, 64],
    ];

    const expected3: Layout = [
      [27, 29, 28, 34, 33, 35, 30, 32, 31],
      [36, 38, 37, 43, 42, 44, 39, 41, 40],
      [45, 47, 46, 52, 51, 53, 48, 50, 49],
      [72, 74, 73, 79, 78, 80, 75, 77, 76],
      [63, 65, 64, 70, 69, 71, 66, 68, 67],
      [54, 56, 55, 61, 60, 62, 57, 59, 58],
      [0, 2, 1, 7, 6, 8, 3, 5, 4],
      [9, 11, 10, 16, 15, 17, 12, 14, 13],
      [18, 20, 19, 25, 24, 26, 21, 23, 22],
    ];

    seedRandom('lorem');
    expect(shuffleLayout(BASE_LAYOUT)).toEqual(expected1);

    seedRandom('ipsum');
    expect(shuffleLayout(BASE_LAYOUT)).toEqual(expected2);

    seedRandom('dolor');
    expect(shuffleLayout(BASE_LAYOUT)).toEqual(expected3);
  });
});
