import { Board } from '../types';
import { sequenceToBoard } from './helper';
import { validateSequence } from './validate';

export const stringToArray = (boardString: string): Board => {
  if (!validateSequence(boardString)) {
    throw new Error(
      'Invalid board string, expected 81 character string containing numbers 1-9 and dashes',
    );
  }

  return sequenceToBoard(boardString);
};
