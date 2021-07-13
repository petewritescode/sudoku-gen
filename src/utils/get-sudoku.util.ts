import { BASE_LAYOUT, SEEDS } from '../constants';
import { Difficulty, Sudoku } from '../types';
import { getSequence } from './helper';
import { getLayout } from './layout';
import { getSeed } from './seed';
import { getTokenMap } from './token';

export const getSudoku = (difficulty?: Difficulty): Sudoku => {
  // TODO Destructive testing if they pass an incorrect difficulty

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
