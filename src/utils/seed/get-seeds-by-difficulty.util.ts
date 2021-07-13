import { Difficulty } from '../../types/difficulty.type';
import { Sudoku } from '../../types/sudoku.type';

export const getSeedsByDifficulty = (seeds: Sudoku[], difficulty?: Difficulty): Sudoku[] =>
  seeds.filter((seed) => !difficulty || seed.difficulty === difficulty);
