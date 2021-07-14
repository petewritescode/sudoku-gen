import { GRID_SIZE } from '../constants/grid-size.constant';

export const getSequenceColumns = (sequence: string): string[] =>
  sequence.split('').reduce<string[]>((acc, token, index) => {
    const tokenColumnIndex = index % GRID_SIZE;

    return acc.map((column, columnIndex) =>
      columnIndex === tokenColumnIndex ? `${column}${token}` : column,
    );
  }, Array.from<string>({ length: GRID_SIZE }).fill(''));
