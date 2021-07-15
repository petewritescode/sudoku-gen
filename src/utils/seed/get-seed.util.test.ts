import { getSeed } from './get-seed.util';
import { seedRandom } from '../../test-utils/seed-random.util';
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

describe('getSeed', () => {
  test('returns a random seed of any difficulty if not specified', () => {
    seedRandom('lorem');
    expect(getSeed(seeds)).toEqual(seeds[5]);

    seedRandom('ipsum');
    expect(getSeed(seeds)).toEqual(seeds[7]);

    seedRandom('dolor');
    expect(getSeed(seeds)).toEqual(seeds[1]);

    seedRandom('amet');
    expect(getSeed(seeds)).toEqual(seeds[4]);
  });

  test('returns a random seed of the specified difficulty', () => {
    seedRandom('lorem');
    expect(getSeed(seeds, 'easy')).toEqual(seeds[1]);

    seedRandom('ipsum');
    expect(getSeed(seeds, 'medium')).toEqual(seeds[3]);

    seedRandom('dolor');
    expect(getSeed(seeds, 'hard')).toEqual(seeds[4]);

    seedRandom('sit');
    expect(getSeed(seeds, 'expert')).toEqual(seeds[6]);
  });
});
