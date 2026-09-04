import { getLayoutBands } from './get-layout-bands.util';
import { Layout } from '../../types/layout.type';
import { shuffleArray } from '../helper/shuffle-array.util';

export const shuffleLayoutRows = (layout: Layout): Layout =>
  getLayoutBands(layout)
    .map((rows) => shuffleArray(rows))
    .flat();
