import { Grid } from '../types/grid.type';

export const rotate270 = (grid: Grid): Grid =>
  grid[0].map((_row, index) => grid.map((row) => [...row].reverse()[index]));
