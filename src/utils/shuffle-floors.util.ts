import { Grid } from '../types/grid.type';
import { getFloors } from './get-floors.util';
import { sortRandom } from './sort-random.util';

export const shuffleFloors = (grid: Grid): Grid =>
  getFloors(grid)
    .sort(sortRandom)
    .reduce((acc, rows) => [...acc, ...rows], []);
