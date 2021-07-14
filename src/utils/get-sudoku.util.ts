import { BASE_LAYOUT, DIFFICULTY_LEVELS, SEEDS } from '../constants';
import { Difficulty, Sudoku } from '../types';
import { getSequence } from './helper';
import { getLayout } from './layout';
import { getSeed } from './seed';
import { getTokenMap } from './token';
import { validateDifficulty } from './validate';

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
