import { Layout } from '../../types/layout.type';
import { sortRandom } from '../helper/sort-random.util';
import { getLayoutBands } from './get-layout-bands.util';

export const shuffleLayoutBands = (layout: Layout): Layout =>
  getLayoutBands(layout)
    .sort(sortRandom)
    .reduce((acc, rows) => [...acc, ...rows], []);
