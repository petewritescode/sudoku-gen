import { Difficulty } from '../types/difficulty.type';
import { Sudoku } from '../types/sudoku.type';
import { getRandomItem } from './get-random-item.util';
import { getSeedsByDifficulty } from './get-seeds-by-difficulty.util';

export const getSeed = (seeds: Sudoku[], difficulty?: Difficulty): Sudoku =>
  getRandomItem(getSeedsByDifficulty(seeds, difficulty));
