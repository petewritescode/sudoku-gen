import { DIFFICULTY_LEVELS } from './difficulty-levels.constant';
import { getSequenceColumns } from '../test-utils/get-sequence-columns.util';
import { getSequenceRows } from '../test-utils/get-sequence-rows.util';
import { SEEDS } from './seeds.constant';

describe('SEEDS constant', () => {
  test('has at least one sudoku per difficulty level', () => {
    DIFFICULTY_LEVELS.forEach((difficulty) => {
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
