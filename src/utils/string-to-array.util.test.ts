import { Board } from '../types/board.type';
import { stringToArray } from './string-to-array.util';

describe('stringToArray', () => {
  test('throws an error if passed an invalid sequence string', () => {
    const sequence = 'abc';

    expect(() => stringToArray(sequence)).toThrow();
  });

  test('converts a sequence string to a board grid', () => {
    const sequence =
      '12-45-78---67891-37-9-23-562345-7--1567---234-9-23456-3-5--8912-7891--4591-3456--';

    const expected: Board = [
      ['1', '2', '-', '4', '5', '-', '7', '8', '-'],
      ['-', '-', '6', '7', '8', '9', '1', '-', '3'],
      ['7', '-', '9', '-', '2', '3', '-', '5', '6'],
      ['2', '3', '4', '5', '-', '7', '-', '-', '1'],
      ['5', '6', '7', '-', '-', '-', '2', '3', '4'],
      ['-', '9', '-', '2', '3', '4', '5', '6', '-'],
      ['3', '-', '5', '-', '-', '8', '9', '1', '2'],
      ['-', '7', '8', '9', '1', '-', '-', '4', '5'],
      ['9', '1', '-', '3', '4', '5', '6', '-', '-'],
    ];

    expect(stringToArray(sequence)).toEqual(expected);
  });
});
