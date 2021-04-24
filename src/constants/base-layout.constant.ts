import { Layout } from '../types/layout.type';
import { GRID_SIZE } from './grid-size.constant';

export const BASE_LAYOUT: Layout = Array.from({ length: GRID_SIZE }).map((_row, rowIndex) =>
  Array.from({ length: GRID_SIZE }).map((_col, colIndex) => GRID_SIZE * rowIndex + colIndex),
);
