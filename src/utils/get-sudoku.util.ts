import { Difficulty } from '../types/difficulty.type';
import { Sudoku } from '../types/sudoku.type';
import { generateBoard } from './generate-board.util';
import { getSeed } from './get-seed.util';
import { getSubstitutionMap } from './get-substitution-map.util';
import { getUniqueGrid } from './get-unique-grid.util';

export const getSudoku = (difficulty?: Difficulty): Sudoku => {
  const seed = getSeed(difficulty);
  const uniqueGrid = getUniqueGrid();
  const substitutionMap = getSubstitutionMap();

  const puzzle = generateBoard(seed.puzzle, uniqueGrid, substitutionMap);
  const solution = generateBoard(seed.solution, uniqueGrid, substitutionMap);

  return {
    puzzle,
    solution,
    difficulty: seed.difficulty,
  };
};
