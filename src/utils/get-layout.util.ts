import { BASE_LAYOUT } from '../constants/base-layout.constant';
import { Layout } from '../types/layout.type';
import { rotate } from './rotate.util';
import { shuffle } from './shuffle.util';

export const getLayout = (): Layout => shuffle(rotate(BASE_LAYOUT));
