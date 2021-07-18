import { getLayoutBands } from './get-layout-bands.util';
import { Layout } from '../../types/layout.type';
import { sortRandom } from '../helper/sort-random.util';

export const shuffleLayoutBands = (layout: Layout): Layout =>
  getLayoutBands(layout).sort(sortRandom).flat();
