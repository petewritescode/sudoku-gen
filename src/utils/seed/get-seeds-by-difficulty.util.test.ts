import { getSeedsByDifficulty } from './get-seeds-by-difficulty.util';
import { Sudoku } from '../../types/sudoku.type';

const seeds: Sudoku[] = [
  { puzzle: 'aaa', solution: 'aaa', difficulty: 'easy' },
  { puzzle: 'bbb', solution: 'bbb', difficulty: 'easy' },
  { puzzle: 'ccc', solution: 'ccc', difficulty: 'medium' },
  { puzzle: 'ddd', solution: 'ddd', difficulty: 'medium' },
  { puzzle: 'eee', solution: 'eee', difficulty: 'hard' },
  { puzzle: 'fff', solution: 'fff', difficulty: 'hard' },
  { puzzle: 'ggg', solution: 'ggg', difficulty: 'expert' },
  { puzzle: 'hhh', solution: 'hhh', difficulty: 'expert' },
];

describe('getSeedsByDifficulty', () => {
  test('returns all seeds if no difficulty is specified', () => {
    expect(getSeedsByDifficulty(seeds)).toEqual(seeds);
  });

  test('returns all seeds with the specified difficulty', () => {
    expect(getSeedsByDifficulty(seeds, 'easy')).toEqual([seeds[0], seeds[1]]);
    expect(getSeedsByDifficulty(seeds, 'medium')).toEqual([seeds[2], seeds[3]]);
    expect(getSeedsByDifficulty(seeds, 'hard')).toEqual([seeds[4], seeds[5]]);
    expect(getSeedsByDifficulty(seeds, 'expert')).toEqual([seeds[6], seeds[7]]);
  });
});
