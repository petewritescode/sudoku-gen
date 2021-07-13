import { Board, Layout } from '../../types';

export const populateLayout = (layout: Layout, sequence: string): Board =>
  layout.map((row) => row.map((cell) => sequence[cell]));
