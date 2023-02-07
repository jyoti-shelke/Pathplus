import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Prothrombin} from './prothrombin';
import {generateId, PROTHROMBINS} from './prothrombin-mock';

@Injectable({
  providedIn: 'root'
})
export class ProthrombinService {

  prothrombins: Prothrombin[] = PROTHROMBINS;

  constructor() {
  }

  getProthrombins(): Observable<Prothrombin[]> {
    return of(this.prothrombins);
  }

  getProthrombin(id: string): Observable<Prothrombin> {
    const prothrombin = this.prothrombins.find(value => '' + value.id === id);
    return of(prothrombin);
  }

  saveProthrombin(prothrombin: Prothrombin): Observable<string> {
    if (!prothrombin.id) {
      prothrombin.id = generateId(1000);
      this.prothrombins.push(prothrombin);
    } else {
      const index = this.prothrombins.findIndex(value => value.id === prothrombin.id);
      this.prothrombins[index] = prothrombin;
    }
    return of('Test Saved succesfully');
  }

  deleteProthrombin(id: number): Observable<string> {
    const index = this.prothrombins.findIndex(value => value.id === id);
    this.prothrombins.splice(index, 1);
    return of('Test deleted succesfully');
  }
}
