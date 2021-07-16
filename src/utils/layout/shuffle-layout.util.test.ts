import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { Layout } from '../../types/layout.type';
import { seedRandom } from '../../test-utils/seed-random.util';
import { shuffleLayout } from './shuffle-layout.util';

describe('shuffleLayout', () => {
  test('returns the layout shuffled randomly', () => {
    const expected1 = [
      [51, 52, 53, 49, 48, 50, 47, 46, 45],
      [33, 34, 35, 31, 30, 32, 29, 28, 27],
      [42, 43, 44, 40, 39, 41, 38, 37, 36],
      [60, 61, 62, 58, 57, 59, 56, 55, 54],
      [69, 70, 71, 67, 66, 68, 65, 64, 63],
      [78, 79, 80, 76, 75, 77, 74, 73, 72],
      [6, 7, 8, 4, 3, 5, 2, 1, 0],
      [15, 16, 17, 13, 12, 14, 11, 10, 9],
      [24, 25, 26, 22, 21, 23, 20, 19, 18],
    ];

    const expected2: Layout = [
      [74, 72, 73, 75, 76, 77, 79, 78, 80],
      [56, 54, 55, 57, 58, 59, 61, 60, 62],
      [65, 63, 64, 66, 67, 68, 70, 69, 71],
      [29, 27, 28, 30, 31, 32, 34, 33, 35],
      [38, 36, 37, 39, 40, 41, 43, 42, 44],
      [47, 45, 46, 48, 49, 50, 52, 51, 53],
      [20, 18, 19, 21, 22, 23, 25, 24, 26],
      [11, 9, 10, 12, 13, 14, 16, 15, 17],
      [2, 0, 1, 3, 4, 5, 7, 6, 8],
    ];

    const expected3: Layout = [
      [26, 25, 24, 20, 19, 18, 22, 21, 23],
      [8, 7, 6, 2, 1, 0, 4, 3, 5],
      [17, 16, 15, 11, 10, 9, 13, 12, 14],
      [35, 34, 33, 29, 28, 27, 31, 30, 32],
      [53, 52, 51, 47, 46, 45, 49, 48, 50],
      [44, 43, 42, 38, 37, 36, 40, 39, 41],
      [62, 61, 60, 56, 55, 54, 58, 57, 59],
      [71, 70, 69, 65, 64, 63, 67, 66, 68],
      [80, 79, 78, 74, 73, 72, 76, 75, 77],
    ];

    seedRandom('lorem');
    expect(shuffleLayout(BASE_LAYOUT)).toEqual(expected1);

    seedRandom('ipsum');
    expect(shuffleLayout(BASE_LAYOUT)).toEqual(expected2);

    seedRandom('dolor');
    expect(shuffleLayout(BASE_LAYOUT)).toEqual(expected3);
  });
});
