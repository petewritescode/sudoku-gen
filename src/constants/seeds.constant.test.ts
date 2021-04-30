import { Difficulty } from '../types/difficulty.type';
import { GRID_SIZE } from './grid-size.constant';
import { SEEDS } from './seeds.constant';

// TODO Move all of these into test utils and test them

const lineContainer = Array.from<string[]>({ length: GRID_SIZE }).fill([]);

const getDifficulties = () => {
  const difficulties: Record<Difficulty, undefined> = {
    easy: undefined,
    medium: undefined,
    hard: undefined,
    expert: undefined,
  };

  return Object.keys(difficulties);
};

const getTokens = (board: string) => board.split('');

const getRows = (board: string) =>
  getTokens(board).reduce((acc, token, tokenIndex) => {
    const tokenRowIndex = Math.floor(tokenIndex / GRID_SIZE);

    return acc.map((row, rowIndex) => (rowIndex === tokenRowIndex ? [...row, token] : row));
  }, lineContainer);

const getColumns = (board: string) =>
  getTokens(board).reduce((acc, token, tokenIndex) => {
    const tokenColumnIndex = tokenIndex % GRID_SIZE;

    return acc.map((column, columnIndex) =>
      columnIndex === tokenColumnIndex ? [...column, token] : column,
    );
  }, lineContainer);

describe('SEEDS constant', () => {
  test('has at least one sudoku per difficulty level', () => {
    getDifficulties().forEach((difficulty) => {
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
        getRows(solution).forEach((row) => {
          expect(row.sort().join('')).toEqual('abcdefghi');
        });
      });

      test('solution columns contain each token once', () => {
        getColumns(solution).forEach((column) => {
          expect(column.sort().join('')).toEqual('abcdefghi');
        });
      });

      test('puzzle contains only tokens a-i and dash', () => {
        expect(puzzle.match(/[^a-i-]/)).toBeFalsy();
      });

      test('puzzle and solution tokens match', () => {
        const mismatches = getTokens(puzzle).reduce<string[]>(
          (acc, letter, index) =>
            letter !== '-' && solution[index] !== letter ? [...acc, letter] : acc,
          [],
        );

        expect(mismatches).toEqual([]);
      });
    });
  });
});
