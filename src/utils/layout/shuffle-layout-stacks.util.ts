import { Layout } from '../../types';
import { rotateLayout270 } from './rotate-layout-270.util';
import { rotateLayout90 } from './rotate-layout-90.util';
import { shuffleLayoutBands } from './shuffle-layout-bands.util';

export const shuffleLayoutStacks = (layout: Layout): Layout =>
  rotateLayout270(shuffleLayoutBands(rotateLayout90(layout)));
