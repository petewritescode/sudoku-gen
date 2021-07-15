import { boardToSequence } from './board-to-sequence.util';
import { Layout } from '../../types/layout.type';
import { populateLayout } from '../layout/populate-layout.util';
import { replaceTokens } from './replace-tokens.util';
import { TokenMap } from '../../types/token-map.type';

export const getSequence = (layout: Layout, seedSequence: string, tokenMap: TokenMap): string =>
  boardToSequence(populateLayout(layout, replaceTokens(seedSequence, tokenMap)));
