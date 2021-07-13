import { Layout } from '../../types';

export const getLayoutBands = (layout: Layout): number[][][] => [
  [layout[0], layout[1], layout[2]],
  [layout[3], layout[4], layout[5]],
  [layout[6], layout[7], layout[8]],
];
