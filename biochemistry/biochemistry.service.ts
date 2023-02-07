import { Injectable } from '@angular/core';
import {Biochemistry} from './biochemistry';
import {generateId, BIOCHEMISTRYS} from './biochemistry-mock';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiochemistryService {

  biochemistrys: Biochemistry[] = BIOCHEMISTRYS;

  constructor() {
  }

  getBiochemistrys(): Observable<Biochemistry[]> {
    return of(this.biochemistrys);
  }

  getBiochemistry(id: string): Observable<Biochemistry> {
    const biochemistry = this.biochemistrys.find(value => '' + value.id === id);
    return of(biochemistry);
  }

  saveBiochemistry(biochemistry: Biochemistry): Observable<string> {
    if (!biochemistry.id) {
      biochemistry.id = generateId(1000);
      this.biochemistrys.push(biochemistry);
    } else {
      const index = this.biochemistrys.findIndex(value => value.id === biochemistry.id);
      this.biochemistrys[index] = biochemistry;
    }
    return of('Test Saved succesfully');
  }

  deleteBiochemistry(id: number): Observable<string> {
    const index = this.biochemistrys.findIndex(value => value.id === id);
    this.biochemistrys.splice(index, 1);
    return of('Test deleted succesfully');
  }
}
