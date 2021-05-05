import { Board } from '../types/board.type';

export const boardToString = (board: Board): string => board.map((row) => row.join('')).join('');
