import { getSequenceColumns } from './get-sequence-columns.util';

describe('getSequenceColumns', () => {
  test('returns an array of row strings', () => {
    const sequence =
      'abcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghi';

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

    expect(getSequenceColumns(sequence)).toEqual(expected);
  });
});
