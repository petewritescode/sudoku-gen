import { Layout } from '../types/layout.type';

export const rotate270 = (layout: Layout): Layout =>
  layout[0].map((_row, index) => layout.map((row) => [...row].reverse()[index]));
