import { BASE_LAYOUT } from '../../constants/base-layout.constant';
import { rotateLayout0 } from './rotate-layout-0.util';

describe('rotateLayout0', () => {
  test('returns the layout unrotated', () => {
    expect(rotateLayout0(BASE_LAYOUT)).toEqual(BASE_LAYOUT);
  });
});
