import { TokenMap } from '../types/token-map.type';
import { sortRandom } from './sort-random.util';

export const getTokenMap = (): TokenMap =>
  'abcdefghi'
    .split('')
    .sort(sortRandom)
    .reduce((acc, token, index) => {
      return {
        ...acc,
        [token]: String(index + 1),
      };
    }, {});