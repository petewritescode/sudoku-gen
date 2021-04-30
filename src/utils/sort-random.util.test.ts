import { seedRandom } from '../test/utils/seed-random.util';
import { sortRandom } from './sort-random.util';

const items = ['a', 'b', 'c'];

describe('sortRandom', () => {
  test('sorts an array randomly', () => {
    seedRandom('lorem');
    expect([...items].sort(sortRandom)).toEqual(['b', 'c', 'a']);

    seedRandom('ipsum');
    expect([...items].sort(sortRandom)).toEqual(['c', 'b', 'a']);

    seedRandom('amet');
    expect([...items].sort(sortRandom)).toEqual(['b', 'a', 'c']);
  });
});
