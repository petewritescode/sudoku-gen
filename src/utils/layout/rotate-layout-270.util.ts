import { Layout } from '../../types';

export const rotateLayout270 = (layout: Layout): Layout =>
  layout[0].map((_row, index) => layout.map((row) => [...row].reverse()[index]));
