import { Board } from '../types';
import { boardToSequence } from './helper';
import { validateBoard } from './validate';

export const arrayToString = (boardArray: Board): string => {
  if (!validateBoard(boardArray)) {
    throw new Error('Invalid board array, expected 9x9 array containing numbers 1-9 and dashes');
  }

  return boardToSequence(boardArray);
};
