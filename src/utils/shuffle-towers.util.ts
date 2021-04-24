import { Layout } from '../types/layout.type';
import { rotate270 } from './rotate-270.util';
import { rotate90 } from './rotate-90.util';
import { shuffleFloors } from './shuffle-floors.util';

export const shuffleTowers = (layout: Layout): Layout => rotate270(shuffleFloors(rotate90(layout)));
