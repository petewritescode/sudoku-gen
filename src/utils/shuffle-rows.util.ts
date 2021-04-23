import { Grid } from '../types/grid.type';
import { getFloors } from './get-floors.util';
import { sortRandom } from './sort-random.util';

export const shuffleRows = (grid: Grid): Grid =>
  getFloors(grid)
    .map((rows) => rows.sort(sortRandom))
    .reduce((acc, rows) => [...acc, ...rows], []);
