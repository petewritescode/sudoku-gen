import { SubstitutionMap } from '../types/substitution-map.type';

export const substituteTokens = (board: string, substitutionMap: SubstitutionMap): string =>
  Object.entries(substitutionMap).reduce(
    (acc, [token, replacement]) => acc.replace(new RegExp(token, 'g'), replacement),
    board,
  );
