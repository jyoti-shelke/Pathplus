import { Hbsagrt } from './hbsagrt';

export const HBSAGRTS: Hbsagrt[] = [
  {
    id: generateId(1000),
    result: '1',
    method: '1',
    lotNo: '1',
    bNo: 1,
    mfg: 1,
    expDate: '1',
    notes: ''
  },
  {
    id: generateId(1000),
    result: '1',
    method: '1',
    lotNo: '1',
    bNo: 1,
    mfg: 1,
    expDate: '1',
    notes: ''
  }
];

export function generateId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
