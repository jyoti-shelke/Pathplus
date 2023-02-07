import { Malariart } from './malariart';

export const MALARIART: Malariart[] = [
  {
    id: generateId(1000),
    pbsforPm: '1',
    pVivax: '1',
    pFalciparum: '1',
    lotNo: 1,
    bNo: 1,
    mfg: 1,
    expDate: '1',
    sTyphiO: 1,
    sTyphiH: 1,
    notes: ''
  },
  {
    id: generateId(1000),
    pbsforPm: '1',
    pVivax: '1',
    pFalciparum: '1',
    lotNo: 1,
    bNo: 1,
    mfg: 1,
    expDate: '1',
    sTyphiO: 1,
    sTyphiH: 1,
    notes: ''
  }
];  

export function generateId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
