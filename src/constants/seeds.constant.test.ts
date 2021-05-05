import { rotateBoard90 } from '../test/utils/rotate-board-90.util';
import { Difficulty } from '../types/difficulty.type';
import { stringToBoard } from '../utils/string-to-board.util';
import { SEEDS } from './seeds.constant';

const DIFFICULTIES_MAP: Record<Difficulty, undefined> = {
  easy: undefined,
  medium: undefined,
  hard: undefined,
  expert: undefined,
};

const DIFFICULTIES = Object.keys(DIFFICULTIES_MAP);

describe('SEEDS constant', () => {
  test('has at least one sudoku per difficulty level', () => {
    DIFFICULTIES.forEach((difficulty) => {
      const sudokus = SEEDS.filter((seed) => seed.difficulty === difficulty);

      expect(sudokus.length).toBeGreaterThanOrEqual(1);
    });
  });

  SEEDS.forEach(({ puzzle, solution }, index) => {
    describe(`sudoku index ${index}`, () => {
      test('is unique', () => {
        expect(SEEDS.filter((seed) => seed.solution === solution)).toHaveLength(1);
      });

      test('puzzle and solution are 81 characters long', () => {
        expect(puzzle).toHaveLength(81);
        expect(solution).toHaveLength(81);
      });

      test('solution rows contain each token once', () => {
        stringToBoard(solution).forEach((row) => {
          expect(row.sort().join('')).toEqual('abcdefghi');
        });
      });

      test('solution columns contain each token once', () => {
        rotateBoard90(stringToBoard(solution)).forEach((column) => {
          expect(column.sort().join('')).toEqual('abcdefghi');
        });
      });

      test('puzzle contains only tokens a-i and dash', () => {
        expect(puzzle.match(/[^a-i-]/)).toBeFalsy();
      });

      test('puzzle and solution tokens match', () => {
        const mismatches = puzzle
          .split('')
          .reduce<string[]>(
            (acc, token, index) =>
              token === '-' || token === solution[index] ? acc : [...acc, token],
            [],
          );

        expect(mismatches).toEqual([]);
      });
    });
  });
});
