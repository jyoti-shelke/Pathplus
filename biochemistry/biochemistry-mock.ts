import { Biochemistry } from './biochemistry';

export const BIOCHEMISTRYS: Biochemistry[] = [
  {
    id: generateId(1000),
    srBilirubinTotal: 1,
    direct: 1,
    indirect: 1,
    sgpt: 1,
    sgot: 1,
    slap: 1,
    bloodUrea: 1,
    sCreatinine: 1,
    sUricAcid: 1,
   
    serumTotalCholesterol: 1,
    serumTriglycerides: 1,
    hdlCholestrerol: 1,
    ldlCholestrerol: 1,
   
    serumcalcium: 1,
    serumSodium: 1, 
    serumPottasium: 1,
    serumcloride: 1,
   
    bloodSugar: 1,
    serumProtein: 1, 
    serumAlbumine: 1,
   
    serumAmylase: 1,
    crpTest: 1, 
    serumCholinesterase: 1,
    serumLipase: 1,
    notes: ''
  },
  {
    id: generateId(1000),
    srBilirubinTotal: 1,
    direct: 1,
    indirect: 1,
    sgpt: 1,
    sgot: 1,
    slap: 1,
    bloodUrea: 1,
    sCreatinine: 1,
    sUricAcid: 1,
   
    serumTotalCholesterol: 1,
    serumTriglycerides: 1,
    hdlCholestrerol: 1,
    ldlCholestrerol: 1,
   
    serumcalcium: 1,
    serumSodium: 1, 
    serumPottasium: 1,
    serumcloride: 1,
   
    bloodSugar: 1,
    serumProtein: 1, 
    serumAlbumine: 1,
   
    serumAmylase: 1,
    crpTest: 1, 
    serumCholinesterase: 1,
    serumLipase: 1,
    notes: ''
  }
];

export function generateId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
