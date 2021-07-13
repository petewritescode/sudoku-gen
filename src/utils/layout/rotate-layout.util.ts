import { Layout } from '../../types';
import { getRandomItem } from '../helper';
import { rotateLayout0 } from './rotate-layout-0.util';
import { rotateLayout180 } from './rotate-layout-180.util';
import { rotateLayout270 } from './rotate-layout-270.util';
import { rotateLayout90 } from './rotate-layout-90.util';

export const rotateLayout = (layout: Layout): Layout =>
  getRandomItem([rotateLayout0, rotateLayout90, rotateLayout180, rotateLayout270])(layout);
