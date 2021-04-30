import { Board } from '../types/board.type';

export const boardToSequence = (board: Board): string => board.map((row) => row.join('')).join('');
