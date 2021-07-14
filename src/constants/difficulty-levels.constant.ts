import { Difficulty } from '../types';

const DIFFICULTY_RECORD: Record<Difficulty, undefined> = {
  easy: undefined,
  medium: undefined,
  hard: undefined,
  expert: undefined,
};

export const DIFFICULTY_LEVELS = Object.keys(DIFFICULTY_RECORD);
