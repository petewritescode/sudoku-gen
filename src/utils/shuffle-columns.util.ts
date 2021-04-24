import { Layout } from '../types/layout.type';
import { rotate270 } from './rotate-270.util';
import { rotate90 } from './rotate-90.util';
import { shuffleRows } from './shuffle-rows.util';

export const shuffleColumns = (layout: Layout): Layout => rotate270(shuffleRows(rotate90(layout)));
