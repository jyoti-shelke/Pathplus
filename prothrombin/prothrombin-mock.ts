import {Prothrombin} from './prothrombin';

export const PROTHROMBINS: Prothrombin[] = [
  {
    id: generateId(1000),
    controlTime: 2,
    patientTime: 2,
    internationalNormalRatio: 2,
    notes: 'Test 1'
  },
  {
    id: generateId(1000),
    controlTime: 1,
    patientTime: 1,
    internationalNormalRatio: 1,
    notes: 'Test 2'
  }
];

export function generateId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
