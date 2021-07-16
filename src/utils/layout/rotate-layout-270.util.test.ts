import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { Layout } from '../../types/layout.type';
import { rotateLayout270 } from './rotate-layout-270.util';

describe('rotateLayout270', () => {
  test('returns the layout rotated 270 degrees', () => {
    const expected: Layout = [
      [8, 17, 26, 35, 44, 53, 62, 71, 80],
      [7, 16, 25, 34, 43, 52, 61, 70, 79],
      [6, 15, 24, 33, 42, 51, 60, 69, 78],
      [5, 14, 23, 32, 41, 50, 59, 68, 77],
      [4, 13, 22, 31, 40, 49, 58, 67, 76],
      [3, 12, 21, 30, 39, 48, 57, 66, 75],
      [2, 11, 20, 29, 38, 47, 56, 65, 74],
      [1, 10, 19, 28, 37, 46, 55, 64, 73],
      [0, 9, 18, 27, 36, 45, 54, 63, 72],
    ];

    expect(rotateLayout270(BASE_LAYOUT)).toEqual(expected);
  });
});
