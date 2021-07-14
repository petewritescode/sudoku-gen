import { validateDifficulty } from './validate-difficulty.util';

describe('validateDifficulty', () => {
  test('returns true for valid difficulty levels', () => {
    expect(validateDifficulty('easy')).toBe(true);
    expect(validateDifficulty('medium')).toBe(true);
    expect(validateDifficulty('hard')).toBe(true);
    expect(validateDifficulty('expert')).toBe(true);
  });

  test('returns false for invalid difficulty levels', () => {
    expect(validateDifficulty('Easy')).toBe(false);
    expect(validateDifficulty('foobar')).toBe(false);
    expect(validateDifficulty('')).toBe(false);
  });

  test('returns false for incorrect data types', () => {
    expect(validateDifficulty(undefined)).toBe(false);
    expect(validateDifficulty(null)).toBe(false);
    expect(validateDifficulty(['abc'])).toBe(false);
    expect(validateDifficulty(123)).toBe(false);
    expect(validateDifficulty(true)).toBe(false);
  });
});
