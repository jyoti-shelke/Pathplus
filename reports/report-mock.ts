import { Report } from './report';

export const REPORTS: Report[] = [
  {
    id: generateId(1000),
    testType: 'HAEMOGRAM',
    userId: '1',
    userName: 'Amit Deore',
    userPhone: '+919999999999',
    doctorId: '1',
    doctorName: 'Dr. Suresh Patil',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    tuberculosisrt: null,
    malariart: null,
    prothrombin: null,
    diabetic: null,
    urine: null,
    hbsagrt: null,
    widal: null,
    haemogram: {
      id: '1',
      haemoglobin: 1,
      platelet: 1,
      leukocyte: 1,
      neutrophils: 1,
      eosinophils: 1,
      basophils: 1,
      lymphocytes: 1,
      monocytes: 1,
      mcv: 1,
      mch: 1,
      mchc: 1,
      mpv: 1,
      pdw: 1,
      reticulocytes: 1,
      rbcMorphology: 1,
      esrByWintrobe: 1,
      wbcMorphology: 1,
      clotingTime: 1,
      bleedingTime: 1,
      bloodGroup: '',
      rh: '',
      parasite: '',
      rbsl: '',
      me: '',
      tlc: '',
      vdrlRpr: '',
      notes: 'Normal',
     },   
   
    biochemistry: null
  },
  {
    id: generateId(1000),
    testType: 'HAEMOGRAM',
    userId: '2',
    userName: 'Amol Patil',
    userPhone: '+919888888888',
    doctorId: '2',
    doctorName: 'Dr. Manish Sisode',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    tuberculosisrt: null,
    malariart: null,
    prothrombin: null,
    diabetic: null,
    urine: null,
    hbsagrt: null,
    widal: null,
    haemogram: {
      id: '1',
      haemoglobin: 1,
      platelet: 1,
      leukocyte: 1,
      neutrophils: 1,
      eosinophils: 1,
      basophils: 1,
      lymphocytes: 1,
      monocytes: 1,
      mcv: 1,
      mch: 1,
      mchc: 1,
      mpv: 1,
      pdw: 1,
      reticulocytes: 1,
      rbcMorphology: 1,
      esrByWintrobe: 1,
      wbcMorphology: 1,
      clotingTime: 1,
      bleedingTime: 1,
      bloodGroup: '',
      rh: '',
      parasite: '',
      rbsl: '',
      me: '',
      tlc: '',
      vdrlRpr: '',
      notes: 'Normal',
    },
   
    biochemistry: null
  },
  {
    id: generateId(1000),
    testType: 'TUBERCULOSISRT',
    userId: '1',
    userName: 'Amit Deore',
    userPhone: '+919999999999',
    doctorId: '1',
    doctorName: 'Dr. Suresh Patil',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    haemogram: null,
    malariart: null,
    prothrombin: null,
    diabetic: null,
    urine: null,
    hbsagrt: null,
    widal: null,
    tuberculosisrt: {
      id: generateId(1000),
      tuberculosisIgG: '1',
      tuberculosisIgM: '1',
      notes: 'Normal',
    },
   
    biochemistry: null

  },
  {
    id: generateId(1000),
    testType: 'MALARIART',
    userId: '2',
    userName: 'Amol Patil',
    userPhone: '+919888888888',
    doctorId: '2',
    doctorName: 'Dr. Manish Sisode',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    tuberculosisrt: null,
    haemogram: null,
    prothrombin: null,
    diabetic: null,
    urine: null,
    hbsagrt: null,
    widal: null,
    malariart: {
      id: 1,
      pbsforPm: '1',
      pVivax: '1',
      pFalciparum: '1',
      lotNo: 1,
      bNo: 1,
      mfg: 1,
      expDate: '12/12/2020',
      sTyphiO: 1,
      sTyphiH: 1,
      notes: 'test'

    },

    biochemistry: null

  },
  {
    id: generateId(1000),
    testType: 'DIABETIC',
    userId: '1',
    userName: 'Amit Deore',
    userPhone: '+919999999999',
    doctorId: '1',
    doctorName: 'Dr. Suresh Patil',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    tuberculosisrt: null,
    malariart: null,
    prothrombin: null,
    haemogram: null,
    urine: null,
    hbsagrt: null,
    widal: null,
    diabetic: {
      id: 1,
      fBloodSugar: 1,
      fUrineSugar: 1,
      fAcetone: '1',
      ppBloodSugar: 1,
      ppUrineSugar: 1,
      ppAcetone: 'string',
      randomBloodS: 1,
      randomUrineS: 1,
      randomAcetone: 'string',
      gtt1: 1,
      urineSugar: 1,
      ketone: 'string',
      gtt2: 1,
      urineSugar1: 1,
      ketone1: 'string',
      notes: 'string',
    },

   
    biochemistry: null

  },
  {
    id: generateId(1000),
    testType: 'URINE',
    userId: '2',
    userName: 'Amol Patil',
    userPhone: '+919888888888',
    doctorId: '2',
    doctorName: 'Dr. Manish Sisode',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    tuberculosisrt: null,
    malariart: null,
    prothrombin: null,
    haemogram: null,
    diabetic: null,
    widal: null,
    hbsagrt: null,
    urine: {
      id: 1,
      colour: '1',
      apprearance: '1',
      ph: '1',
      sgravity: '1',
      eplCells: 1,
      pusCells: 1,
      eplCast: 1,
      pusCellCast: 1,
      crystals: 1,
      rbc: 1,
      other: 1,
      albumin: '1',
      sugar: '1',
      urobillinogen: '1',
      acetone: '1',
      bileSalt: '1',
      bilePigment: '1',
      blood: '1',
      notes: ''

    },  

    biochemistry: null

  },
  {
    id: generateId(1000),
    testType: 'HBSAGRT',
    userId: '2',
    userName: 'Amol Patil',
    userPhone: '+919888888888',
    doctorId: '2',
    doctorName: 'Dr. Manish Sisode',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    tuberculosisrt: null,
    malariart: null,
    prothrombin: null,
    haemogram: null,
    diabetic: null,
    urine: null,
    widal: null,
    hbsagrt: {
      id: 1,
      result: '1',
      method: '1',
      lotNo: '1',
      bNo: 1,
      mfg: 1,
      expDate: '1',
      notes: ''

    },
    biochemistry:null
 
  },
  {
    id: generateId(1000),
    testType: 'WIDAL',
    userId: '1',
    userName: 'Amit Deore',
    userPhone: '+919999999999',
    doctorId: '1',
    doctorName: 'Dr. Suresh Patil',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    tuberculosisrt: null,
    malariart: null,
    prothrombin: null,
    haemogram: null,
    diabetic: null,
    urine: null,
    hbsagrt: null,

    widal: {
      id: 1,
      sTyphiO: '1',
      sTyphiH: '1',
      sParatyphiTyphiAh: '1',
      sParatyphiTyphiBh: '1',
      impression: '1',
      montouxTestIoTuPpdInjected: '1',
      duration: '1',
      result: '1',
      s1A: '1',
      s2B: '1',
      grade: '1',
      notes: ''
    },
    biochemistry: null
  },
  {
    id: generateId(1000),
    testType: 'BIOCHEMISTRY',
    userId: '1',
    userName: 'Amit Deore',
    userPhone: '+919999999999',
    doctorId: '1',
    doctorName: 'Dr. Suresh Patil',
    labId: '1',
    labName: 'NextCare',
    technicianId: '1',
    technicianName: 'Mr. Ravi Kumar',
    creationDateTime: new Date(),
    notes: 'Normal',
    tuberculosisrt: null,
    malariart: null,
    prothrombin: null,
    haemogram: {
      id: '1',
      haemoglobin: 1,
      platelet: 1,
      leukocyte: 1,
      neutrophils: 1,
      eosinophils: 1,
      basophils: 1,
      lymphocytes: 1,
      monocytes: 1,
      mcv: 1,
      mch: 1,
      mchc: 1,
      mpv: 1,
      pdw: 1,
      reticulocytes: 1,
      rbcMorphology: 1,
      esrByWintrobe: 1,
      wbcMorphology: 1,
      clotingTime: 1,
      bleedingTime: 1,
      bloodGroup: '',
      rh: '',
      parasite: '',
      rbsl: '',
      me: '',
      tlc: '',
      vdrlRpr: '',
      notes: 'Normal',
    },
    diabetic: {
      id: 1,
      fBloodSugar: 1,
      fUrineSugar: 1,
      fAcetone: '1',
      ppBloodSugar: 1,
      ppUrineSugar: 1,
      ppAcetone: 'string',
      randomBloodS: 1,
      randomUrineS: 1,
      randomAcetone: 'string',
      gtt1: 1,
      urineSugar: 1,
      ketone: 'string',
      gtt2: 1,
      urineSugar1: 1,
      ketone1: 'string',
      notes: 'string',
    },
    urine: {
      id: 1,
      colour: '1',
      apprearance: '1',
      ph: '1',
      sgravity: '1',
      eplCells: 1,
      pusCells: 1,
      eplCast: 1,
      pusCellCast: 1,
      crystals: 1,
      rbc: 1,
      other: 1,
      albumin: '1',
      sugar: '1',
      urobillinogen: '1',
      acetone: '1',
      bileSalt: '1',
      bilePigment: '1',
      blood: '1',
      notes: ''
    }, hbsagrt: null,
    widal: null,
    biochemistry: {
      id: 1,
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
  },
];

export function generateId(max) {
  return '' + Math.floor(Math.random() * Math.floor(max));
}