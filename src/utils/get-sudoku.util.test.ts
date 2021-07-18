import { getSudoku } from './get-sudoku.util';
import { seedRandom } from '../test-utils/seed-random.util';

describe('getSudoku', () => {
  test('throws an error if given an invalid difficulty', () => {
    expect(() => getSudoku('foobar' as any)).toThrow();
  });

  test('returns a sudoku when passed a valid difficulty', () => {
    const expectedEasy = {
      puzzle: '41--75-----53--7--2-36-81--7-9--25-1-3--9-47--2-1-7---6587--9-----26-8--1925---47',
      solution: '416975238985321764273648159769432581531896472824157396658714923347269815192583647',
      difficulty: 'easy',
    };

    const expectedMedium = {
      puzzle: '9----214-2---9------53--7--82--7-596-16-5-------6-----35421--6---29-5-8--8-------',
      solution: '978562143231497658645381729823174596416859372597623814354218967762935481189746235',
      difficulty: 'medium',
    };

    const expectedHard = {
      puzzle: '---43-5-------146-8--2---3-43--------2----3---96-14-----2---957---725-----48-62--',
      solution: '961437528273581469845269731438672195127958346596314872682143957319725684754896213',
      difficulty: 'hard',
    };

    const expectedExpert = {
      puzzle: '--13---57----------96--2-----3-9----6---5-----8---63--3-8-1--6-------19-----782--',
      solution: '241389657837561942596742813413897526672153489985426371328914765764235198159678234',
      difficulty: 'expert',
    };

    seedRandom('lorem');
    expect(getSudoku('easy')).toEqual(expectedEasy);

    seedRandom('ipsum');
    expect(getSudoku('medium')).toEqual(expectedMedium);

    seedRandom('dolor');
    expect(getSudoku('hard')).toEqual(expectedHard);

    seedRandom('sit');
    expect(getSudoku('expert')).toEqual(expectedExpert);
  });

  test('returns a sudoku when passed no difficulty', () => {
    const expected1 = {
      puzzle: '---4-5-8---8-7-5---1----3-9---712-----38--7567----6----8-6-----9------3--45------',
      solution: '269435187438179562517268349856712493123894756794356218381647925972581634645923871',
      difficulty: 'hard',
    };

    const expected2 = {
      puzzle: '-2-6--8-----8-7--3------7--768--------2---13---3----5-6---2-----9---3-------1--49',
      solution: '327695814156847923489132765768351492542968137913274658674529381291483576835716249',
      difficulty: 'expert',
    };

    const expected3 = {
      puzzle: '-58-24-------5--9-7-3--6--4----6-7-55-2---96--7---3------83--2--6571-43932164-5-8',
      solution: '658924317214357896793186254139268745582471963476593182947835621865712439321649578',
      difficulty: 'easy',
    };

    seedRandom('lorem');
    expect(getSudoku()).toEqual(expected1);

    seedRandom('ipsum');
    expect(getSudoku()).toEqual(expected2);

    seedRandom('dolor');
    expect(getSudoku()).toEqual(expected3);
  });
});
