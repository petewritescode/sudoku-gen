import { GRID_SIZE } from '../../constants';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validateSequence = (sequence: any): boolean =>
  typeof sequence === 'string' &&
  sequence.length === GRID_SIZE ** 2 &&
  sequence.split('').every((token) => '123456789-'.includes(token));
