import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { Layout } from '../../types/layout.type';
import { rotateLayout90 } from './rotate-layout-90.util';

describe('rotateLayout90', () => {
  test('returns the layout rotated 90 degrees', () => {
    const expected: Layout = [
      [72, 63, 54, 45, 36, 27, 18, 9, 0],
      [73, 64, 55, 46, 37, 28, 19, 10, 1],
      [74, 65, 56, 47, 38, 29, 20, 11, 2],
      [75, 66, 57, 48, 39, 30, 21, 12, 3],
      [76, 67, 58, 49, 40, 31, 22, 13, 4],
      [77, 68, 59, 50, 41, 32, 23, 14, 5],
      [78, 69, 60, 51, 42, 33, 24, 15, 6],
      [79, 70, 61, 52, 43, 34, 25, 16, 7],
      [80, 71, 62, 53, 44, 35, 26, 17, 8],
    ];

    expect(rotateLayout90(BASE_LAYOUT)).toEqual(expected);
  });
});
