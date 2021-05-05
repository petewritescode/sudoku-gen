import { LINE_CONTAINER } from './line-container.constant';

describe('LINE_CONTAINER constant', () => {
  test('is an array of 9 empty arrays', () => {
    const expected = [[], [], [], [], [], [], [], [], []];

    expect(LINE_CONTAINER).toEqual(expected);
  });
});
