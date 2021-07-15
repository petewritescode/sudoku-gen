import { Token } from '../../types/token.type';
import { TokenMap } from '../../types/token-map.type';

export const replaceTokens = (sequence: string, tokenMap: TokenMap): string =>
  sequence
    .split('')
    .map((token) => tokenMap[token as Token] || token)
    .join('');
