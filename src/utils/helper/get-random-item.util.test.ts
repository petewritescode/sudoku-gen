import { getRandomItem } from './get-random-item.util';
import { seedRandom } from '../../test-utils/seed-random.util';

describe('getRandomItem', () => {
  test('returns a random item from an array', () => {
    const items = ['a', 'b', 'c'];

    seedRandom('dolor');
    expect(getRandomItem(items)).toEqual(items[0]);

    seedRandom('amet');
    expect(getRandomItem(items)).toEqual(items[1]);

    seedRandom('ipsum');
    expect(getRandomItem(items)).toEqual(items[2]);
  });
});
