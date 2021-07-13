import { getSequenceColumns } from '../test-utils';
import { getSequenceRows } from '../test-utils';
import { Difficulty } from '../types';
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
        const result = getSequenceRows(solution).every(
          (row) => row.split('').sort().join('') === 'abcdefghi',
        );

        expect(result).toBe(true);
      });

      test('solution columns contain each token once', () => {
        const result = getSequenceColumns(solution).every(
          (column) => column.split('').sort().join('') === 'abcdefghi',
        );

        expect(result).toBe(true);
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
