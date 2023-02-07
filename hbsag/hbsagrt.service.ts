import { Injectable } from '@angular/core';
import {Hbsagrt} from './hbsagrt';
import {generateId, HBSAGRTS} from './hbsag-mock';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HbsagrtService {

  hbsagrts: Hbsagrt[] = HBSAGRTS;

  constructor() {
  }

  getHbsagrts(): Observable<Hbsagrt[]> {
    return of(this.hbsagrts);
  }

  getHbsagrt(id: string): Observable<Hbsagrt> {
    const hbsagrt = this.hbsagrts.find(value => '' + value.id === id);
    return of(hbsagrt);
  }

  saveHbsagrt(hbsagrt: Hbsagrt): Observable<string> {
    if (!hbsagrt.id) {
      hbsagrt.id = generateId(1000);
      this.hbsagrts.push(hbsagrt);
    } else {
      const index = this.hbsagrts.findIndex(value => value.id === hbsagrt.id);
      this.hbsagrts[index] = hbsagrt;
    }
    return of('Test Saved succesfully');
  }

  deleteHbsagrt(id: number): Observable<string> {
    const index = this.hbsagrts.findIndex(value => value.id === id);
    this.hbsagrts.splice(index, 1);
    return of('Test deleted succesfully');
  }
}
