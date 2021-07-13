import { Token, TokenMap } from '../../types';

export const replaceTokens = (sequence: string, tokenMap: TokenMap): string =>
  sequence
    .split('')
    .map((token) => tokenMap[token as Token] || token)
    .join('');
