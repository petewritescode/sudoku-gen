import { getSudoku } from './get-sudoku.util';
import { seedRandom } from '../test-utils/seed-random.util';

describe('getSudoku', () => {
  test('throws an error if given an invalid difficulty', () => {
    expect(() => getSudoku('foobar' as any)).toThrow();
  });

  test('returns a sudoku when passed a valid difficulty', () => {
    const expectedEasy = {
      puzzle: '-296-5-4--6-1---7-7-1-43----7-912-8-25-----9--1-5843-7-47-5------58-7-148---6-73-',
      solution: '329675148564198273781243659473912586258736491916584327147359862635827914892461735',
      difficulty: 'easy',
    };

    const expectedMedium = {
      puzzle: '--4-76--18725-4--9-1-------14-3--976-----9----597-----4--6-----6---4--52--7--8-3-',
      solution: '394876521872514369516293748148325976763489215259761483485632197631947852927158634',
      difficulty: 'medium',
    };

    const expectedHard = {
      puzzle: '-28----35----9--1-------89-89--6----1----94----2-85---4-5-1---8---736--1716------',
      solution: '928147635364598217571623894897461352153279486642385179435912768289736541716854923',
      difficulty: 'hard',
    };

    const expectedExpert = {
      puzzle: '8----947-3-9--------14-6---------------1--8-356--7-9----78----4-----5-8------37--',
      solution: '856239471349517268721486395213958647974162853568374912697821534432795186185643729',
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
      puzzle: '----4--687--9---1--31---9---2--9---------86-----13------2--7---475-------9-6--172',
      solution: '259741368748963215631825947327496581914578623586132794162387459475219836893654172',
      difficulty: 'hard',
    };

    const expected2 = {
      puzzle: '-6--8----9--4--------5--6-2391--------8-----7--4----58----318---4---9-1--------3-',
      solution: '465182973932467581187593642391758426658324197724916358579231864843679215216845739',
      difficulty: 'expert',
    };

    const expected3 = {
      puzzle: '--9----7-----356-1-5-67-----18----64--58--7-9-6---3---58-46-91249---1---72-389-56',
      solution: '639124875872935641154678293318792564245816739967543128583467912496251387721389456',
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
