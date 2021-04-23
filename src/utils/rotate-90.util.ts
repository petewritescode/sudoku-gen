import { Grid } from '../types/grid.type';

export const rotate90 = (grid: Grid): Grid =>
  grid[0].map((_row, index) => grid.map((row) => row[index]).reverse());
