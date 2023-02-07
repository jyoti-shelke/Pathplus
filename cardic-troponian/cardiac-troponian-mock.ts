import { CardicTroponian } from './cardic-troponian';

export const CARDICTROPONIAN: CardicTroponian[] = [
  {
    id: generateId(1000),
    paramI: 'Negative',
    paramII: 'Negative',
    notes: ''
  },
  {
    id: generateId(1000),
    paramI: 'Negative',
    paramII: 'Negative',
    notes: ''
  }
];

export function generateId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
