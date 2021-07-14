import { Board } from '../types/board.type';
import { boardToSequence } from './helper/board-to-sequence.util';
import { validateBoard } from './validate/validate-board.util';

export const arrayToString = (boardArray: Board): string => {
  if (!validateBoard(boardArray)) {
    throw new Error('Invalid board array, expected 9x9 array containing numbers 1-9 and dashes');
  }

  return boardToSequence(boardArray);
};
