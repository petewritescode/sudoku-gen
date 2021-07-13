import { Layout } from '../../types';
import { rotateLayout } from './rotate-layout.util';
import { shuffleLayout } from './shuffle-layout.util';

export const getLayout = (baseLayout: Layout): Layout => shuffleLayout(rotateLayout(baseLayout));
