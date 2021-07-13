import seedrandom from 'seedrandom';

export const seedRandom = (seed: string): void => {
  seedrandom(seed, { global: true });
};
