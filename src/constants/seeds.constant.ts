import { Sudoku } from '../types/sudoku.type';

export const SEEDS: Sudoku<string>[] = [
  {
    puzzle: 'ibfcd---a--ag--c-i-gch--b-f-----g----f-ia-db--igb--f-c-h-dg-a-bg-dafb--h---ec----',
    solution: 'ibfcdehgaheagbfcdidgchiabefcdbfhgiaeefhiacdbgaigbedfhcfhedgiacbgcdafbeihbaiechgfd',
    difficulty: 'easy',
  },
  {
    puzzle: 'hg-cde--f--i--f--a-e---a----c-d-i-he-i----g--g--e-----f-c-e--ig-a-f--c---b----e--',
    solution: 'hgacdeibfcdigbfheabefhiadgcacbdgifheeihafbgcdgfdechbaifhcbedaigiaefhgcdbdbgiacefh',
    difficulty: 'medium',
  },
  {
    puzzle: '----h----gc--i-e-a-hb----g--------e--fig--h-b-g----f------d-a---------dfe-d-ca---',
    solution: 'deachgbfigcfdibehaihbeafdgcbdhaficegcfigedhabagehbcfidfbgidhacehacbgeidfeidfcagbh',
    difficulty: 'hard',
  },
  {
    puzzle: '--h---d-e-------g-f-b-c-i--g----f--c-a----------a---b--c--e-gd--i-g--f------ia---',
    solution: 'aghifbdceidchaebgffebdcgihagbdehfaiceaicbdhfgchfagiebdbcafehgdihiegdcfabdfgbiaceh',
    difficulty: 'expert',
  },
];
