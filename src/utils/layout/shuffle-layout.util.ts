import { Layout } from '../../types/layout.type';
import { shuffleLayoutBands } from './shuffle-layout-bands.util';
import { shuffleLayoutColumns } from './shuffle-layout-columns.util';
import { shuffleLayoutRows } from './shuffle-layout-rows.util';
import { shuffleLayoutStacks } from './shuffle-layout-stacks.util';

export const shuffleLayout = (layout: Layout): Layout =>
  shuffleLayoutColumns(shuffleLayoutRows(shuffleLayoutStacks(shuffleLayoutBands(layout))));
