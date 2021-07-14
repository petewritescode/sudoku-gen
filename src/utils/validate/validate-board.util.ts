import { GRID_SIZE } from '../../constants';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validateBoard = (board: any): boolean =>
  Array.isArray(board) &&
  board.length === GRID_SIZE &&
  board.every(
    (row) =>
      Array.isArray(row) &&
      row.length === GRID_SIZE &&
      row.every((token) => '123456789-'.includes(token)),
  );
