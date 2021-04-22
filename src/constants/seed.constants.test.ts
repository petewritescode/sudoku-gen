import { SEEDS } from './seed.constants';

const getLetters = (puzzle: string): string[] => puzzle.split('');

const getRows = (puzzle: string): string[][] =>
  getLetters(puzzle).reduce(
    (acc, token, tokenIndex) => {
      const currentRowIndex = Math.floor(tokenIndex / 9);

      return acc.map((row, rowIndex) => (rowIndex === currentRowIndex ? [...row, token] : row));
    },
    Array.from<string[]>({ length: 9 }).fill([]),
  );

const getColumns = (puzzle: string): string[][] =>
  getLetters(puzzle).reduce(
    (acc, token, tokenIndex) => {
      const currenttokenIndex = tokenIndex % 9;

      return acc.map((column, columnIndex) =>
        columnIndex === currenttokenIndex ? [...column, token] : column,
      );
    },
    Array.from<string[]>({ length: 9 }).fill([]),
  );

describe('Seed constants', () => {
  Object.entries(SEEDS).forEach(([difficulty, sudokus]) => {
    describe(`difficulty level ${difficulty}`, () => {
      it('has at least one sudoku', () => {
        expect(sudokus.length).toBeGreaterThanOrEqual(1);
      });

      sudokus.forEach(({ puzzle, solution }, sudokuIndex) => {
        describe(`sudoku index ${sudokuIndex}`, () => {
          it('has a puzzle and solution 81 characters long', () => {
            expect(puzzle.length).toEqual(81);
            expect(solution.length).toEqual(81);
          });

          it('has a solution with only tokens a-i', () => {
            expect(solution.match(/[^a-i]/)).toBeFalsy();
          });

          it('has solution rows containing each token once', () => {
            getRows(solution).forEach((row) => {
              expect(row.sort().join('')).toEqual('abcdefghi');
            });
          });

          it('has solution columns containing each token once', () => {
            getColumns(solution).forEach((column) => {
              expect(column.sort().join('')).toEqual('abcdefghi');
            });
          });

          it('has a puzzle with only tokens a-i and -', () => {
            expect(puzzle.match(/[^a-i-]/)).toBeFalsy();
          });

          it('has solution and puzzle tokens which align', () => {
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
  });
});
