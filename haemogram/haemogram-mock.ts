import {Haemogram} from './haemogram';

export const HAEMOGRAMS: Haemogram[] = [
  {
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
    notes: ''
  },
  {
    id: '2',
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
    notes: ''
  },
  {
    id: '3',
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
    notes: ''
  }
];

export function generateId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}