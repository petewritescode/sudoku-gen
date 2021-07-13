import { Layout } from '../../types';

export const rotateLayout180 = (layout: Layout): Layout =>
  layout.map((row) => [...row].reverse()).reverse();
