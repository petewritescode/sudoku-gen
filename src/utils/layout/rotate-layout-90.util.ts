import { Layout } from '../../types';

export const rotateLayout90 = (layout: Layout): Layout =>
  layout[0].map((_row, index) => layout.map((row) => row[index]).reverse());
