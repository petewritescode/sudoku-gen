import { BASE_LAYOUT } from '../constants/base-layout.constant';
import { DIFFICULTY_LEVELS } from '../constants/difficulty-levels.constant';
import { SEEDS } from '../constants/seeds.constant';
import { Difficulty } from '../types/difficulty.type';
import { Sudoku } from '../types/sudoku.type';
import { getSequence } from './helper/get-sequence.util';
import { getLayout } from './layout/get-layout.util';
import { getSeed } from './seed/get-seed.util';
import { getTokenMap } from './token/get-token-map.util';
import { validateDifficulty } from './validate/validate-difficulty.util';

export const getSudoku = (difficulty?: Difficulty): Sudoku => {
  if (difficulty && !validateDifficulty(difficulty)) {
    throw new Error(`Invalid difficulty, expected one of: ${DIFFICULTY_LEVELS.join(', ')}`);
  }

  const seed = getSeed(SEEDS, difficulty);
  const layout = getLayout(BASE_LAYOUT);
  const tokenMap = getTokenMap();

  const puzzle = getSequence(layout, seed.puzzle, tokenMap);
  const solution = getSequence(layout, seed.solution, tokenMap);

  return {
    puzzle,
    solution,
    difficulty: seed.difficulty,
  };
};
