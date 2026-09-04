import { getTokenMap } from './get-token-map.util';
import { seedRandom } from '../../test-utils/seed-random.util';
import { TokenMap } from '../../types/token-map.type';

describe('getTokenMap', () => {
  test('returns an object mapping tokens to random numbers 1-9', () => {
    const expected1: TokenMap = {
      a: '3',
      b: '8',
      c: '5',
      d: '7',
      e: '1',
      f: '2',
      g: '9',
      h: '6',
      i: '4',
    };

    const expected2: TokenMap = {
      a: '7',
      b: '4',
      c: '5',
      d: '3',
      e: '8',
      f: '2',
      g: '1',
      h: '6',
      i: '9',
    };

    const expected3: TokenMap = {
      a: '3',
      b: '8',
      c: '9',
      d: '6',
      e: '1',
      f: '5',
      g: '4',
      h: '2',
      i: '7',
    };

    seedRandom('lorem');
    expect(getTokenMap()).toEqual(expected1);

    seedRandom('ipsum');
    expect(getTokenMap()).toEqual(expected2);

    seedRandom('dolor');
    expect(getTokenMap()).toEqual(expected3);
  });
});
