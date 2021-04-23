import { Grid } from '../types/grid.type';
import { getRandomItem } from './get-random-item.util';
import { rotate0 } from './rotate-0.util';
import { rotate180 } from './rotate-180.util';
import { rotate270 } from './rotate-270.util';
import { rotate90 } from './rotate-90.util';

export const rotate = (grid: Grid): Grid =>
  getRandomItem([rotate0, rotate90, rotate180, rotate270])(grid);
