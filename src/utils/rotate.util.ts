import { Layout } from '../types/layout.type';
import { getRandomItem } from './get-random-item.util';
import { rotate0 } from './rotate-0.util';
import { rotate180 } from './rotate-180.util';
import { rotate270 } from './rotate-270.util';
import { rotate90 } from './rotate-90.util';

export const rotate = (layout: Layout): Layout =>
  getRandomItem([rotate0, rotate90, rotate180, rotate270])(layout);
