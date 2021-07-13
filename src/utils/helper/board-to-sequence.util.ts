import { Board } from '../../types';

export const boardToSequence = (board: Board): string => board.map((row) => row.join('')).join('');
