import { Layout } from '../types/layout.type';
import { rotateLayout } from './rotate-layout.util';
import { shuffleLayout } from './shuffle-layout.util';

export const getLayout = (baseLayout: Layout): Layout => shuffleLayout(rotateLayout(baseLayout));
