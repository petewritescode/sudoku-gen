import { shuffleArray } from '../helper/shuffle-array.util';
import { TokenMap } from '../../types/token-map.type';

export const getTokenMap = (): TokenMap =>
  shuffleArray('abcdefghi'.split('')).reduce(
    (acc, token, index) => ({
      ...acc,
      [token]: String(index + 1),
    }),
    {},
  ) as TokenMap;
