import { GRID_SIZE } from '../../constants';
import { Board } from '../../types';

export const isValidBoard = (board: Board): boolean =>
  Array.isArray(board) &&
  board.length === GRID_SIZE &&
  board.every(
    (row) =>
      Array.isArray(row) &&
      row.length === GRID_SIZE &&
      row.every((token) => '123456789-'.includes(token)),
  );
