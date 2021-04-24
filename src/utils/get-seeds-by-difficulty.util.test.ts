import { Seed } from '../types/seed.type';
import { getSeedsByDifficulty } from './get-seeds-by-difficulty.util';

const seeds: Seed[] = [
  { puzzle: 'aaaaa', solution: 'aaaaa', difficulty: 'easy' },
  { puzzle: 'bbbbb', solution: 'bbbbb', difficulty: 'medium' },
  { puzzle: 'ccccc', solution: 'ccccc', difficulty: 'hard' },
  { puzzle: 'ddddd', solution: 'ddddd', difficulty: 'expert' },
];

describe('getSeedsByDifficulty', () => {
  test('returns all seeds if no difficulty is specified', () => {
    expect(getSeedsByDifficulty(seeds)).toEqual(seeds);
  });

  test('returns all seeds with the specified difficulty', () => {
    expect(getSeedsByDifficulty(seeds, 'easy')).toEqual([seeds[0]]);
    expect(getSeedsByDifficulty(seeds, 'medium')).toEqual([seeds[1]]);
    expect(getSeedsByDifficulty(seeds, 'hard')).toEqual([seeds[2]]);
    expect(getSeedsByDifficulty(seeds, 'expert')).toEqual([seeds[3]]);
  });
});
