import { Board } from '../../types/board.type';
import { validateBoard } from './validate-board.util';

describe('validateBoard', () => {
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

    expect(validateBoard(board)).toBe(true);
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

    expect(validateBoard(board)).toBe(false);
  });

  test('returns false for a non-9x9 array', () => {
    const board: Board = [
      ['1', '2', '-', '4', '5', '-', '7', '8'],
      ['-', '-', '6', '7', '8', '9', '1', '-'],
      ['7', '-', '9', '-', '2', '3', '-', '5'],
      ['2', '3', '4', '5', '-', '7', '-', '-'],
      ['5', '6', '7', '-', '-', '-', '2', '3'],
      ['-', '9', '-', '2', '3', '4', '5', '6'],
      ['3', '-', '5', '-', '-', '8', '9', '1'],
      ['-', '7', '8', '9', '1', '-', '-', '4'],
    ];

    expect(validateBoard(board)).toBe(false);
  });

  test('returns false for incorrect data types', () => {
    expect(validateBoard(undefined)).toBe(false);
    expect(validateBoard(null)).toBe(false);
    expect(validateBoard('abc')).toBe(false);
    expect(validateBoard(123)).toBe(false);
    expect(validateBoard(true)).toBe(false);
  });
});
