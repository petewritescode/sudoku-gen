import { TokenMap } from '../../types';
import { replaceTokens } from './replace-tokens.util';

describe('replaceTokens', () => {
  test('replaces tokens using the token map', () => {
    const sequence1 =
      'ibfcd---a--ag--c-i-gch--b-f-----g----f-ia-db--igb--f-c-h-dg-a-bg-dafb--h---ec----';

    const sequence2 =
      'ibfcdehgaheagbfcdidgchiabefcdbfhgiaeefhiacdbgaigbedfhcfhedgiacbgcdafbeihbaiechgfd';

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
      '98436---1--17--3-9-732--8-4-----7----4-91-68--978--4-3-2-67-1-87-6148--2---53----';

    const expected2 =
      '984365271251784369673291854368427915542913687197856423425679138736148592819532746';

    expect(replaceTokens(sequence1, tokenMap)).toEqual(expected1);
    expect(replaceTokens(sequence2, tokenMap)).toEqual(expected2);
  });
});
