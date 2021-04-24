import { Difficulty } from './difficulty.type';

export type Sudoku<T> = {
  puzzle: T;
  solution: T;
  difficulty: Difficulty;
};
