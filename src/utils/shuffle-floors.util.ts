import { Layout } from '../types/layout.type';
import { getFloors } from './get-floors.util';
import { sortRandom } from './sort-random.util';

export const shuffleFloors = (layout: Layout): Layout =>
  getFloors(layout)
    .sort(sortRandom)
    .reduce((acc, rows) => [...acc, ...rows], []);
