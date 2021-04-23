import { SEEDS } from '../constants/seeds.constant';
import { Difficulty } from '../types/difficulty.type';
import { Sudoku } from '../types/sudoku.type';

export const getSeedsByDifficulty = (difficulty?: Difficulty): Sudoku[] =>
  SEEDS.filter((seed) => !difficulty || seed.difficulty === difficulty);
