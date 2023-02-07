import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Haemogram} from './haemogram';
import {generateId, HAEMOGRAMS} from './haemogram-mock';

@Injectable()
export class HaemogramService {

  haemograms: Haemogram[] = HAEMOGRAMS;

  constructor() {
  }

  getHaemograms(): Observable<Haemogram[]> {
    return of(this.haemograms);
  }

  getHaemogram(id: string): Observable<Haemogram> {
    const haemogram = this.haemograms.find(value => '' + value.id === id);
    return of(haemogram);
  }

  saveHaemogram(haemogram: Haemogram): Observable<string> {
    if (!haemogram.id) {
      haemogram.id = '' + generateId(1000);
      this.haemograms.push(haemogram);
    } else {
      const index = this.haemograms.findIndex(value => value.id === haemogram.id);
      this.haemograms[index] = haemogram;
    }
    return of('Test Saved succesfully');
  }

  deleteHaemogram(id: string): Observable<string> {
    const index = this.haemograms.findIndex(value => value.id === id);
    this.haemograms.splice(index, 1);
    return of('Test deleted succesfully');
  }
}
