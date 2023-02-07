import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Hiv} from './hiv';
import {generateId, HIVS} from './hiv-mock';

@Injectable({
  providedIn: 'root'
})
export class HivService {

  hivs: Hiv[] = HIVS;

  constructor() {
  }

  getHivs(): Observable<Hiv[]> {
    return of(this.hivs);
  }

  getHiv(id: string): Observable<Hiv> {
    const hiv = this.hivs.find(value => '' + value.id === id);
    return of(hiv);
  }

  saveHiv(hiv: Hiv): Observable<string> {
    if (!hiv.id) {
      hiv.id = generateId(1000);
      this.hivs.push(hiv);
    } else {
      const index = this.hivs.findIndex(value => value.id === hiv.id);
      this.hivs[index] = hiv;
    }
    return of('Test Saved succesfully');
  }

  deleteHiv(id: number): Observable<string> {
    const index = this.hivs.findIndex(value => value.id === id);
    this.hivs.splice(index, 1);
    return of('Test deleted succesfully');
  }
}
