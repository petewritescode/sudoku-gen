import { Grid } from '../types/grid.type';
import { shuffleColumns } from './shuffle-columns.util';
import { shuffleFloors } from './shuffle-floors.util';
import { shuffleRows } from './shuffle-rows.util';
import { shuffleTowers } from './shuffle-towers.util';

export const shuffle = (grid: Grid): Grid =>
  shuffleFloors(shuffleRows(shuffleTowers(shuffleColumns(grid))));
