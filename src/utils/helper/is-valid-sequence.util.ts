import { GRID_SIZE } from '../../constants';

export const isValidSequence = (sequence: string): boolean =>
  sequence.length === GRID_SIZE ** 2 &&
  sequence.split('').every((token) => '123456789-'.includes(token));
