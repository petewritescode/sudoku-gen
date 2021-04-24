import { Layout } from '../types/layout.type';

export const rotate180 = (layout: Layout): Layout =>
  layout.map((row) => [...row].reverse()).reverse();
