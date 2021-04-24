import { Layout } from '../types/layout.type';
import { rotate } from './rotate.util';
import { shuffle } from './shuffle.util';

export const getLayout = (baseLayout: Layout): Layout => shuffle(rotate(baseLayout));
