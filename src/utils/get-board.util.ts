import { Board } from '../types/board.type';
import { Layout } from '../types/layout.type';
import { SubstitutionMap } from '../types/substitution-map.type';

export const getBoard = (
  boardSequence: string,
  layout: Layout,
  substitutionMap: SubstitutionMap,
): Board =>
  layout.map((row) =>
    row.map((cell) => substitutionMap[boardSequence[cell]] || boardSequence[cell]),
  );
