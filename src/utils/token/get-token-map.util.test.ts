import { getTokenMap } from './get-token-map.util';
import { seedRandom } from '../../test-utils/seed-random.util';
import { TokenMap } from '../../types/token-map.type';

describe('getTokenMap', () => {
  test('returns an object mapping tokens to random numbers 1-9', () => {
    const expected1: TokenMap = {
      a: '7',
      b: '3',
      c: '4',
      d: '1',
      e: '6',
      f: '2',
      g: '8',
      h: '9',
      i: '5',
    };

    const expected2: TokenMap = {
      a: '9',
      b: '7',
      c: '1',
      d: '6',
      e: '8',
      f: '2',
      g: '5',
      h: '4',
      i: '3',
    };

    const expected3: TokenMap = {
      a: '2',
      b: '4',
      c: '7',
      d: '9',
      e: '3',
      f: '1',
      g: '5',
      h: '8',
      i: '6',
    };

    seedRandom('lorem');
    expect(getTokenMap()).toEqual(expected1);

    seedRandom('ipsum');
    expect(getTokenMap()).toEqual(expected2);

    seedRandom('dolor');
    expect(getTokenMap()).toEqual(expected3);
  });
});
