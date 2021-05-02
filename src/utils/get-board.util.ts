import { Board } from '../types/board.type';
import { Layout } from '../types/layout.type';

export const getBoard = (layout: Layout, sequence: string): Board =>
  layout.map((row) => row.map((cell) => sequence[cell])) as Board;
