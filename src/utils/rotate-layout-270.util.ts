import { Layout } from '../types/layout.type';

export const rotateLayout270 = (layout: Layout): Layout =>
  layout[0].map((_row, index) => layout.map((row) => [...row].reverse()[index])) as Layout;
