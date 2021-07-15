import { Board } from '../../types/board.type';
import { GRID_SIZE } from '../../constants/grid-size.constant';
import { LINE_CONTAINER } from '../../constants/line-container.constant';

export const sequenceToBoard = (sequence: string): Board =>
  sequence.split('').reduce((acc, token, tokenIndex) => {
    const tokenRowIndex = Math.floor(tokenIndex / GRID_SIZE);

    return acc.map((row, rowIndex) => (rowIndex === tokenRowIndex ? [...row, token] : row));
  }, LINE_CONTAINER);
