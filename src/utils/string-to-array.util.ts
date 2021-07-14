import { Board } from '../types/board.type';
import { sequenceToBoard } from './helper/sequence-to-board.util';
import { validateSequence } from './validate/validate-sequence.util';

export const stringToArray = (boardString: string): Board => {
  if (!validateSequence(boardString)) {
    throw new Error(
      'Invalid board string, expected 81 character string containing numbers 1-9 and dashes',
    );
  }

  return sequenceToBoard(boardString);
};
