import { Layout } from '../types/layout.type';
import { getFloors } from './get-floors.util';
import { sortRandom } from './sort-random.util';

export const shuffleRows = (layout: Layout): Layout =>
  getFloors(layout)
    .map((rows) => rows.sort(sortRandom))
    .reduce((acc, rows) => [...acc, ...rows], []);
