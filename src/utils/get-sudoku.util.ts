import { Board } from '../types/board.type';
import { Difficulty } from '../types/difficulty.type';
import { Sudoku } from '../types/sudoku.type';
import { getBoard } from './get-board.util';
import { getLayout } from './get-layout.util';
import { getSeed } from './get-seed.util';
import { getSubstitutionMap } from './get-substitution-map.util';

export const getSudoku = (difficulty?: Difficulty): Sudoku<Board> => {
  const seed = getSeed(difficulty);
  const layout = getLayout();
  const substitutionMap = getSubstitutionMap();

  const puzzle = getBoard(seed.puzzle, layout, substitutionMap);
  const solution = getBoard(seed.solution, layout, substitutionMap);

  return {
    puzzle,
    solution,
    difficulty: seed.difficulty,
  };
};
