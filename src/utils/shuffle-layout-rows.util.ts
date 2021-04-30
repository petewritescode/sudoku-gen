import { Layout } from '../types/layout.type';
import { getLayoutBands } from './get-layout-bands.util';
import { sortRandom } from './sort-random.util';

export const shuffleLayoutRows = (layout: Layout): Layout =>
  getLayoutBands(layout)
    .map((rows) => rows.sort(sortRandom))
    .reduce((acc, rows) => [...acc, ...rows], []) as Layout;
