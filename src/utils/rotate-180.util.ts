import { Grid } from '../types/grid.type';

export const rotate180 = (grid: Grid): Grid => grid.map((row) => [...row].reverse()).reverse();
