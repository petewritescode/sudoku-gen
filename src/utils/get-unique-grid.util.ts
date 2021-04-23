import { BASE_GRID } from '../constants/base-grid.constant';
import { Grid } from '../types/grid.type';
import { rotate } from './rotate.util';
import { shuffle } from './shuffle.util';

export const getUniqueGrid = (): Grid => shuffle(rotate(BASE_GRID));
