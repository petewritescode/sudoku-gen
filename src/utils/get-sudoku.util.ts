import { BASE_LAYOUT } from '../constants/base-layout.constant';
import { SEEDS } from '../constants/seeds.constant';
import { Difficulty } from '../types/difficulty.type';
import { Sudoku } from '../types/sudoku.type';
import { boardToSequence } from './board-to-sequence.util';
import { getBoard } from './get-board.util';
import { getLayout } from './get-layout.util';
import { getSeed } from './get-seed.util';
import { getTokenMap } from './get-token-map.util';
import { replaceTokens } from './replace-tokens.util';

// TODO Add tests for this - essentially integration
export const getSudoku = (difficulty?: Difficulty): Sudoku => {
  const seed = getSeed(SEEDS, difficulty);
  const layout = getLayout(BASE_LAYOUT);
  const tokenMap = getTokenMap();

  // TODO There's a lot going on in these lines, wrap it up in a function?
  const puzzle = boardToSequence(getBoard(layout, replaceTokens(seed.puzzle, tokenMap)));
  const solution = boardToSequence(getBoard(layout, replaceTokens(seed.solution, tokenMap)));

  // Definitely want to return a string, or would an array be better?
  return {
    puzzle,
    solution,
    difficulty: seed.difficulty,
  };
};
