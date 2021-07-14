import { DIFFICULTY_LEVELS } from '../../constants';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validateDifficulty = (difficulty: any): boolean =>
  DIFFICULTY_LEVELS.includes(difficulty);
