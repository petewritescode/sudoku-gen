import { getTokenMap } from './get-token-map.util';
import { seedRandom } from '../../test-utils/seed-random.util';
import { TokenMap } from '../../types/token-map.type';

describe('getTokenMap', () => {
  test('returns an object mapping tokens to random numbers 1-9', () => {
    const expected1: TokenMap = {
      e: '1',
      f: '2',
      a: '3',
      i: '4',
      c: '5',
      h: '6',
      d: '7',
      b: '8',
      g: '9',
    };

    const expected2: TokenMap = {
      g: '1',
      f: '2',
      d: '3',
      b: '4',
      c: '5',
      h: '6',
      a: '7',
      e: '8',
      i: '9',
    };

    const expected3: TokenMap = {
      e: '1',
      h: '2',
      a: '3',
      g: '4',
      f: '5',
      d: '6',
      i: '7',
      b: '8',
      c: '9',
    };

    seedRandom('lorem');
    expect(getTokenMap()).toEqual(expected1);

    seedRandom('ipsum');
    expect(getTokenMap()).toEqual(expected2);

    seedRandom('dolor');
    expect(getTokenMap()).toEqual(expected3);
  });
});
