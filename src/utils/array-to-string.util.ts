import { Board } from '../types';
import { boardToSequence, isValidBoard } from './helper';

export const arrayToString = (boardArray: Board): string => {
  if (!isValidBoard(boardArray)) {
    throw new Error('Invalid board, expected 9x9 array containing numbers 1-9 and dashes');
  }

  return boardToSequence(boardArray);
};
