import { BASE_LAYOUT } from '../constants/base-layout.constant';
import { SEEDS } from '../constants/seeds.constant';
import { Difficulty } from '../types/difficulty.type';
import { Game } from '../types/game.type';
import { getBoard } from './get-board.util';
import { getLayout } from './get-layout.util';
import { getSeed } from './get-seed.util';
import { getSubstitutionMap } from './get-substitution-map.util';

export const getSudoku = (difficulty?: Difficulty): Game => {
  const seed = getSeed(SEEDS, difficulty);
  const layout = getLayout(BASE_LAYOUT);
  const substitutionMap = getSubstitutionMap();

  const puzzle = getBoard(seed.puzzle, layout, substitutionMap);
  const solution = getBoard(seed.solution, layout, substitutionMap);

  return {
    puzzle,
    solution,
    difficulty: seed.difficulty,
  };
};
