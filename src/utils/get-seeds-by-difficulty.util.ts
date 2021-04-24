import { Difficulty } from '../types/difficulty.type';
import { Seed } from '../types/seed.type';

export const getSeedsByDifficulty = (seeds: Seed[], difficulty?: Difficulty): Seed[] =>
  seeds.filter((seed) => !difficulty || seed.difficulty === difficulty);
