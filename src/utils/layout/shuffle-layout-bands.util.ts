import { Layout } from '../../types';
import { sortRandom } from '../helper';
import { getLayoutBands } from './get-layout-bands.util';

export const shuffleLayoutBands = (layout: Layout): Layout =>
  getLayoutBands(layout)
    .sort(sortRandom)
    .reduce((acc, rows) => [...acc, ...rows], []);
