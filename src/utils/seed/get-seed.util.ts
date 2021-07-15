import { Difficulty } from '../../types/difficulty.type';
import { getRandomItem } from '../helper/get-random-item.util';
import { getSeedsByDifficulty } from './get-seeds-by-difficulty.util';
import { Sudoku } from '../../types/sudoku.type';

export const getSeed = (seeds: Sudoku[], difficulty?: Difficulty): Sudoku =>
  getRandomItem(getSeedsByDifficulty(seeds, difficulty));
