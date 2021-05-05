import { Board } from '../../types/board.type';

export const rotateBoard90 = (board: Board): Board =>
  board[0].map((_row, index) => board.map((row) => row[index]).reverse()) as Board;
