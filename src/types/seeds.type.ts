import { Difficulty } from './difficulty.type';
import { Sudoku } from './sudoku.type';

export type Seeds = Record<Difficulty, Sudoku[]>;
