import { Difficulty } from '../types/difficulty.type';
import { Seed } from '../types/seed.type';
import { getRandomItem } from './get-random-item.util';
import { getSeedsByDifficulty } from './get-seeds-by-difficulty.util';

export const getSeed = (seeds: Seed[], difficulty?: Difficulty): Seed =>
  getRandomItem(getSeedsByDifficulty(seeds, difficulty));
