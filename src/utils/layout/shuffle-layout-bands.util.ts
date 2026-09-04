import { getLayoutBands } from './get-layout-bands.util';
import { Layout } from '../../types/layout.type';
import { shuffleArray } from '../helper/shuffle-array.util';

export const shuffleLayoutBands = (layout: Layout): Layout =>
  shuffleArray(getLayoutBands(layout)).flat();
