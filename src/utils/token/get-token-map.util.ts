import { sortRandom } from '../helper/sort-random.util';
import { TokenMap } from '../../types/token-map.type';

export const getTokenMap = (): TokenMap =>
  'abcdefghi'
    .split('')
    .sort(sortRandom)
    .reduce(
      (acc, token, index) => ({
        ...acc,
        [token]: String(index + 1),
      }),
      {},
    ) as TokenMap;
