import { getSequenceRows } from './get-sequence-rows.util';

describe('getSequenceRows', () => {
  test('returns an array of row strings', () => {
    const sequence =
      'aaaaaaaaabbbbbbbbbcccccccccdddddddddeeeeeeeeefffffffffggggggggghhhhhhhhhiiiiiiiii';

    const expected = [
      'aaaaaaaaa',
      'bbbbbbbbb',
      'ccccccccc',
      'ddddddddd',
      'eeeeeeeee',
      'fffffffff',
      'ggggggggg',
      'hhhhhhhhh',
      'iiiiiiiii',
    ];

    expect(getSequenceRows(sequence)).toEqual(expected);
  });
});
