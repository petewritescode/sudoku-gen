import { Board } from '../types';
import { isValidSequence, sequenceToBoard } from './helper';

export const stringToArray = (boardString: string): Board => {
  if (!isValidSequence(boardString)) {
    throw new Error(
      'Invalid string, expected 81 character string containing numbers 1-9 and dashes',
    );
  }

  return sequenceToBoard(boardString);
};
