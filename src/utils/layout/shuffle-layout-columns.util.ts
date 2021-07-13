import { Layout } from '../../types';
import { rotateLayout270 } from './rotate-layout-270.util';
import { rotateLayout90 } from './rotate-layout-90.util';
import { shuffleLayoutRows } from './shuffle-layout-rows.util';

export const shuffleLayoutColumns = (layout: Layout): Layout =>
  rotateLayout270(shuffleLayoutRows(rotateLayout90(layout)));
