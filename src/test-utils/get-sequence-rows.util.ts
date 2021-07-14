import { GRID_SIZE } from '../constants/grid-size.constant';

export const getSequenceRows = (sequence: string): string[] =>
  sequence.split('').reduce<string[]>((acc, token, index) => {
    const tokenRowIndex = Math.floor(index / GRID_SIZE);

    return acc.map((row, rowIndex) => (rowIndex === tokenRowIndex ? `${row}${token}` : row));
  }, Array.from<string>({ length: GRID_SIZE }).fill(''));
