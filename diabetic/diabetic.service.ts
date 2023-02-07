import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Diabetic} from './diabetic';
import {generateId, DIABETICS} from './diabetic-mock';

@Injectable()
export class DiabeticService {

  diabetics: Diabetic[] = DIABETICS;

  constructor() {
  }

  getDiabetics(): Observable<Diabetic[]> {
    return of(this.diabetics);
  }

  getDiabetic(id: string): Observable<Diabetic> {
    const diabetic = this.diabetics.find(value => '' + value.id === id);
    return of(diabetic);
  }

  saveDiabetic(diabetic: Diabetic): Observable<string> {
    if (!diabetic.id) {
      diabetic.id = generateId(1000);
      this.diabetics.push(diabetic);
    } else {
      const index = this.diabetics.findIndex(value => value.id === diabetic.id);
      this.diabetics[index] = diabetic;
    }
    return of('Test Saved succesfully');
  }

  deleteDiabetic(id: number): Observable<string> {
    const index = this.diabetics.findIndex(value => value.id === id);
    this.diabetics.splice(index, 1);
    return of('Test deleted succesfully');
  }
}
