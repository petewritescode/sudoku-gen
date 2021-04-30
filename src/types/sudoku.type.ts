import { Difficulty } from './difficulty.type';

export type Sudoku = {
  puzzle: string;
  solution: string;
  difficulty: Difficulty;
};
