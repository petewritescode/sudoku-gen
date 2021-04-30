import seedrandom from 'seedrandom';
import { seedRandom } from './seed-random.util';

jest.mock('seedrandom');

describe('seedRandom', () => {
  test('calls seedrandom with the passed seed and the global flag', () => {
    seedRandom('lorem');

    expect(seedrandom).toHaveBeenCalledWith('lorem', { global: true });
  });
});
