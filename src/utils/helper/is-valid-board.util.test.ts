import { Board } from '../../types';
import { isValidBoard } from './is-valid-board.util';

describe('isValidBoard', () => {
  test('returns true for a 9x9 array of tokens 1-9 and dash', () => {
    const board: Board = [
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

    expect(isValidBoard(board)).toBe(true);
  });

  test('returns false if the board is not a 9x9 array', () => {
    expect(isValidBoard(undefined as any)).toBe(false);
    expect(isValidBoard('' as any)).toBe(false);
    expect(isValidBoard(true as any)).toBe(false);
    expect(isValidBoard(123 as any)).toBe(false);
    expect(isValidBoard('abc' as any)).toBe(false);
    expect(isValidBoard([] as any)).toBe(false);
    expect(isValidBoard([[]] as any)).toBe(false);
  });

  test('returns false if the board contains invalid tokens', () => {
    const board: Board = [
      ['a', '2', '-', '4', '5', '-', '7', '8', '-'],
      ['-', '-', '6', '7', '8', '9', '1', '-', '3'],
      ['7', '-', '9', '-', '2', '3', '-', '5', '6'],
      ['2', '3', '4', '5', '-', '7', '-', '-', '1'],
      ['5', '6', '7', '-', '-', '-', '2', '3', '4'],
      ['-', '9', '-', '2', '3', '4', '5', '6', '-'],
      ['3', '-', '5', '-', '-', '8', '9', '1', '2'],
      ['-', '7', '8', '9', '1', '-', '-', '4', '5'],
      ['9', '1', '-', '3', '4', '5', '6', '-', '-'],
    ];

    expect(isValidBoard(board)).toBe(false);
  });
});
