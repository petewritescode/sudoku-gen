import { Board } from '../types/board.type';
import { Layout } from '../types/layout.type';
import { populateLayout } from './populate-layout.util';

describe('populateLayout', () => {
  test('maps a sequence onto the relevant layout grid', () => {
    const sequence1 =
      'ibfcd---a--ag--c-i-gch--b-f-----g----f-ia-db--igb--f-c-h-dg-a-bg-dafb--h---ec----';

    const sequence2 =
      'ibfcdehgaheagbfcdidgchiabefcdbfhgiaeefhiacdbgaigbedfhcfhedgiacbgcdafbeihbaiechgfd';

    const layout: Layout = [
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

    const expected1: Board = [
      ['-', 'h', '-', 'g', '-', 'd', 'a', '-', 'b'],
      ['-', '-', '-', 'c', '-', 'e', '-', '-', '-'],
      ['d', '-', 'g', 'f', 'b', 'a', '-', '-', 'h'],
      ['g', 'i', '-', '-', '-', 'b', 'f', '-', 'c'],
      ['-', 'f', '-', 'a', '-', 'i', 'd', 'b', '-'],
      ['-', '-', '-', '-', 'g', '-', '-', '-', '-'],
      ['c', 'g', '-', '-', '-', 'h', 'b', '-', 'f'],
      ['a', '-', '-', '-', '-', 'g', 'c', '-', 'i'],
      ['f', 'b', 'i', 'd', '-', 'c', '-', '-', 'a'],
    ];

    const expected2: Board = [
      ['e', 'h', 'f', 'g', 'i', 'd', 'a', 'c', 'b'],
      ['i', 'a', 'b', 'c', 'h', 'e', 'g', 'f', 'd'],
      ['d', 'c', 'g', 'f', 'b', 'a', 'e', 'i', 'h'],
      ['g', 'i', 'a', 'e', 'd', 'b', 'f', 'h', 'c'],
      ['h', 'f', 'e', 'a', 'c', 'i', 'd', 'b', 'g'],
      ['b', 'd', 'c', 'h', 'g', 'f', 'i', 'a', 'e'],
      ['c', 'g', 'd', 'i', 'a', 'h', 'b', 'e', 'f'],
      ['a', 'e', 'h', 'b', 'f', 'g', 'c', 'd', 'i'],
      ['f', 'b', 'i', 'd', 'e', 'c', 'h', 'g', 'a'],
    ];

    expect(populateLayout(layout, sequence1)).toEqual(expected1);
    expect(populateLayout(layout, sequence2)).toEqual(expected2);
  });
});
