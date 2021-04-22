import { Difficulty } from '../types/difficulty.type';
import { SEEDS } from './seeds.constant';

const getDifficulties = () => {
  const difficulties: Record<Difficulty, undefined> = {
    easy: undefined,
    medium: undefined,
    hard: undefined,
    expert: undefined,
  };

  return Object.keys(difficulties);
};

const getLetters = (board: string): string[] => board.split('');

const getRows = (board: string): string[][] =>
  getLetters(board).reduce(
    (acc, token, tokenIndex) => {
      const currentRowIndex = Math.floor(tokenIndex / 9);

      return acc.map((row, rowIndex) => (rowIndex === currentRowIndex ? [...row, token] : row));
    },
    Array.from<string[]>({ length: 9 }).fill([]),
  );

const getColumns = (board: string): string[][] =>
  getLetters(board).reduce(
    (acc, token, tokenIndex) => {
      const currenttokenIndex = tokenIndex % 9;

      return acc.map((column, columnIndex) =>
        columnIndex === currenttokenIndex ? [...column, token] : column,
      );
    },
    Array.from<string[]>({ length: 9 }).fill([]),
  );

describe('Seeds constant', () => {
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

      test('solution solumns contain each token once', () => {
        getColumns(solution).forEach((column) => {
          expect(column.sort().join('')).toEqual('abcdefghi');
        });
      });

      test('puzzle contains only tokens a-i and dash', () => {
        expect(puzzle.match(/[^a-i-]/)).toBeFalsy();
      });

      test('puzzle and solution tokens match', () => {
        const mismatches = getLetters(puzzle).reduce<string[]>(
          (acc, letter, index) =>
            letter !== '-' && solution[index] !== letter ? [...acc, letter] : acc,
          [],
        );

        expect(mismatches).toEqual([]);
      });
    });
  });
});
