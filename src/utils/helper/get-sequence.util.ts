import { Layout, TokenMap } from '../../types';
import { populateLayout } from '../layout';
import { boardToSequence } from './board-to-sequence.util';
import { replaceTokens } from './replace-tokens.util';

export const getSequence = (layout: Layout, seedSequence: string, tokenMap: TokenMap): string =>
  boardToSequence(populateLayout(layout, replaceTokens(seedSequence, tokenMap)));
