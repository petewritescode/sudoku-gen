import { Layout } from '../types/layout.type';
import { shuffleColumns } from './shuffle-columns.util';
import { shuffleFloors } from './shuffle-floors.util';
import { shuffleRows } from './shuffle-rows.util';
import { shuffleTowers } from './shuffle-towers.util';

export const shuffle = (layout: Layout): Layout =>
  shuffleFloors(shuffleRows(shuffleTowers(shuffleColumns(layout))));
