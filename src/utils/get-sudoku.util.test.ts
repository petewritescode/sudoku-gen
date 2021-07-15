import { getSudoku } from './get-sudoku.util';
import { seedRandom } from '../test-utils/seed-random.util';

describe('getSudoku', () => {
  test('throws an error if given an invalid difficulty', () => {
    expect(() => getSudoku('foobar' as any)).toThrow();
  });

  test('returns a sudoku when passed a valid difficulty', () => {
    const expectedEasy = {
      puzzle: '-12-5-49---54-9172------68---------924--7-31--7893-2----172384--831--9---2789-5--',
      solution: '812657493365489172794312685136248759249576318578931264951723846483165927627894531',
      difficulty: 'easy',
    };

    const expectedMedium = {
      puzzle: '-3---7----8---6-5-6-594-7---6-17--29-9---4-----4----7--41-5-267-7------89---8---5',
      solution: '432517896789236154615948732368175429197624583254893671841359267573462918926781345',
      difficulty: 'medium',
    };

    const expectedHard = {
      puzzle: '--1----2-----6218-52--------------3-1-684--9--4-3-7-----54-----7-35-9--4-6-------',
      solution: '681754329374962185529138647957621438136845792842397516295416873713589264468273951',
      difficulty: 'hard',
    };

    const expectedExpert = {
      puzzle: '---78----3----5-8-54--9--1--------7---13--5---2---7---4-9-----6-5-------8---1-3-2',
      solution: '196782435372145689548693217635421978781369524924857163419238756253976841867514392',
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
      puzzle: '-1-----4-4-7---------4-6-816---------5237-9---7--9-----------5--61-89-3-9--25----',
      solution: '816927345437815296295436781689542173152378964374691528723164859561789432948253617',
      difficulty: 'hard',
    };

    const expected2 = {
      puzzle: '------9-8-9---5-4--6-2-47----4-6---5-8----------3---8-1---72---3-5--96-----4-----',
      solution: '452716938791835246863294751234968175987541362516327489148672593375189624629453817',
      difficulty: 'expert',
    };

    const expected3 = {
      puzzle: '7-13---42-------863---427511--795-289-8--1--45-74-8--38-59-4--7-725---19------4--',
      solution: '781356942254179386396842751143795628928631574567428193835914267472563819619287435',
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
