import { Layout } from '../../types/layout.type';

export const rotateLayout180 = (layout: Layout): Layout =>
  layout.map((row) => [...row].reverse()).reverse();
