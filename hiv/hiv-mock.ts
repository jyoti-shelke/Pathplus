import { Hiv } from './hiv';

export const HIVS: Hiv[] = [
  {
    id: generateId(1000),
    hivI: 'Negative',
    hivII: 'Negative',
    hivIGp160Env: '1',
    hivIGp120Env: '1',
    hivIp66Pol: '1',
    hivIp55Gag: '1',
    hivIp51Pol: '1',
    hivIGp41Env: '1',
    hivIp39Pol: '1',
    hivIp31Gag: '1',
    hivIp24Gag: '1',
    hivIp55Gag17: '1',
    kitUsed: '1',
    stripNo: 1,
    lotNo: 1,
    expDate: '1',
    result: '1',
    method: '1',
    notes: ''
  },
  {
    id: generateId(1000),
    hivI: 'Negative',
    hivII: 'Negative',
    hivIGp160Env: '1',
    hivIGp120Env: '1',
    hivIp66Pol: '1',
    hivIp55Gag: '1',
    hivIp51Pol: '1',
    hivIGp41Env: '1',
    hivIp39Pol: '1',
    hivIp31Gag: '1',
    hivIp24Gag: '1',
    hivIp55Gag17: '1',
    kitUsed: '1',
    stripNo: 1,
    lotNo: 1,
    expDate: '1',
    result: '1',
    method: '1',
    notes: ''
  }
];

export function generateId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
