import { getLayoutBands } from './get-layout-bands.util';
import { Layout } from '../../types/layout.type';
import { sortRandom } from '../helper/sort-random.util';

export const shuffleLayoutRows = (layout: Layout): Layout =>
  getLayoutBands(layout)
    .map((rows) => rows.sort(sortRandom))
    .flat();
