import { Layout } from '../types/layout.type';
import { getLayoutBands } from './get-layout-bands.util';
import { sortRandom } from './sort-random.util';

export const shuffleLayoutBands = (layout: Layout): Layout =>
  getLayoutBands(layout)
    .sort(sortRandom)
    .reduce((acc, rows) => [...acc, ...rows], []) as Layout;
