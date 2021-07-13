import { TokenMap } from '../../types';
import { sortRandom } from '../helper';

export const getTokenMap = (): TokenMap =>
  'abcdefghi'
    .split('')
    .sort(sortRandom)
    .reduce((acc, token, index) => {
      return {
        ...acc,
        [token]: String(index + 1),
      };
    }, {}) as TokenMap;
