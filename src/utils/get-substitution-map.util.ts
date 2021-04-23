import { SubstitutionMap } from '../types/substitution-map.type';
import { sortRandom } from './sort-random.util';

export const getSubstitutionMap = (): SubstitutionMap =>
  'abcdefghi'
    .split('')
    .sort(sortRandom)
    .reduce((acc, token, index) => {
      return {
        ...acc,
        [token]: String(index + 1),
      };
    }, {});
