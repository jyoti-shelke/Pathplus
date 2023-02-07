import { Injectable } from '@angular/core';
import {CardicTroponian} from './cardic-troponian';
import {generateId, CARDICTROPONIAN} from './cardiac-troponian-mock';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardicTroponianService {

  cardicTroponians: CardicTroponian[] = CARDICTROPONIAN;

  constructor() {
  }

  getCardicTroponians(): Observable<CardicTroponian[]> {
    return of(this.cardicTroponians);
  }

  getCardicTroponian(id: string): Observable<CardicTroponian> {
    const cardicTroponian = this.cardicTroponians.find(value => '' + value.id === id);
    return of(cardicTroponian);
  }

  saveCardicTroponian(cardicTroponian: CardicTroponian): Observable<string> {
    if (!cardicTroponian.id) {
      cardicTroponian.id = generateId(1000);
      this.cardicTroponians.push(cardicTroponian);
    } else {
      const index = this.cardicTroponians.findIndex(value => value.id === cardicTroponian.id);
      this.cardicTroponians[index] = cardicTroponian;
    }
    return of('Test Saved succesfully');
  }

  deleteCardicTroponian(id: number): Observable<string> {
    const index = this.cardicTroponians.findIndex(value => value.id === id);
    this.cardicTroponians.splice(index, 1);
    return of('Test deleted succesfully');
  }
}
