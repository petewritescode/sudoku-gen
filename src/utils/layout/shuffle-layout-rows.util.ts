import { Layout } from '../../types';
import { sortRandom } from '../helper';
import { getLayoutBands } from './get-layout-bands.util';

export const shuffleLayoutRows = (layout: Layout): Layout =>
  getLayoutBands(layout)
    .map((rows) => rows.sort(sortRandom))
    .reduce((acc, rows) => [...acc, ...rows], []);
