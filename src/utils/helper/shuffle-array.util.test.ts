import { seedRandom } from '../../test-utils/seed-random.util';
import { shuffleArray } from './shuffle-array.util';

describe('shuffleArray', () => {
  test('returns a new array with the items randomly shuffled', () => {
    const items = ['a', 'b', 'c'];

    seedRandom('lorem');
    expect(shuffleArray(items)).toEqual(['b', 'a', 'c']);

    seedRandom('ipsum');
    expect(shuffleArray(items)).toEqual(['a', 'b', 'c']);

    seedRandom('amet');
    expect(shuffleArray(items)).toEqual(['c', 'a', 'b']);
  });

  test('does not mutate the original array', () => {
    const items = ['a', 'b', 'c'];

    seedRandom('lorem');
    shuffleArray(items);

    expect(items).toEqual(['a', 'b', 'c']);
  });
});
