import { Grid } from '../types/grid.type';

export const getFloors = (grid: Grid): number[][][] => [
  [grid[0], grid[1], grid[2]],
  [grid[3], grid[4], grid[5]],
  [grid[6], grid[7], grid[8]],
];
