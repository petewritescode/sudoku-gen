import { Layout } from '../../types/layout.type';
import { TokenMap } from '../../types/token-map.type';
import { getSequence } from './get-sequence.util';

describe('getSequence', () => {
  test('returns a board sequence generated from the passed layout, input sequence and token map', () => {
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

    const tokenMap: TokenMap = {
      a: '1',
      b: '8',
      c: '3',
      d: '6',
      e: '5',
      f: '4',
      g: '7',
      h: '2',
      i: '9',
    };

    const expected1 =
      '-2-7-61-8---3-5---6-7481--279---84-3-4-1-968-----7----37---28-41----73-94896-3--1';

    const expected2 =
      '524796138918325746637481592791568423245139687863274915376912854152847369489653271';

    expect(getSequence(layout, sequence1, tokenMap)).toEqual(expected1);
    expect(getSequence(layout, sequence2, tokenMap)).toEqual(expected2);
  });
});
