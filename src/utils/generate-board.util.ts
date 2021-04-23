import { Grid } from '../types/grid.type';
import { SubstitutionMap } from '../types/substitution-map.type';

export const generateBoard = (
  board: string,
  grid: Grid,
  substitutionMap: SubstitutionMap,
): string =>
  grid
    .map((row) => row.map((cell) => substitutionMap[board[cell]] || board[cell]))
    .reduce((acc1, row) => `${acc1}${row.reduce((acc2, cell) => `${acc2}${cell}`, '')}`, '');
