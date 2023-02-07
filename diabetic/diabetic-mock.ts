import {Diabetic} from './diabetic';

export const DIABETICS: Diabetic[] = [
  {
    id: generateId(1000),
    fBloodSugar: 1,
    fUrineSugar: 1,
    fAcetone: '1',
    ppBloodSugar: 1,
    ppUrineSugar: 1,
    ppAcetone: '1',
    randomBloodS: 1,
    randomUrineS: 1,
    randomAcetone: '1',
    gtt1: 1,
    urineSugar: 1,
    ketone: '1',
    gtt2: 1,
    urineSugar1: 1,
    ketone1: '1',
    notes: ''
  },
  {
    id: generateId(1000),
    fBloodSugar: 1,
    fUrineSugar: 1,
    fAcetone: '1',
    ppBloodSugar: 1,
    ppUrineSugar: 1,
    ppAcetone: '1',
    randomBloodS: 1,
    randomUrineS: 1,
    randomAcetone: '1',
    gtt1: 1,
    urineSugar: 1,
    ketone: '1',
    gtt2: 1,
    urineSugar1: 1,
    ketone1: '1',
    notes: ''
  }
];

export function generateId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
