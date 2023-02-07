import {Injectable} from '@angular/core';
import {Malariart} from './malariart';
import {generateId, MALARIART} from './malariart-mock';
import {Observable, of} from 'rxjs';
import {Report} from '../reports/report';
import {REPORTS} from '../reports/report-mock';
import {ReportService} from '../reports/report.service';


@Injectable({ 
  providedIn: 'root'
})
export class MalariartrtService {

  malariarts: Malariart[] = MALARIART;
  reports: Report[] = REPORTS;

  constructor(private reportService: ReportService) {
  }

  getMalariarts(): Observable<Malariart[]> {
    return of(this.malariarts);
  }

  getMalariart(id: string): Observable<Malariart> {
    const malariart = this.malariarts.find(value => '' + value.id === id);
    return of(malariart);
  }

  saveMalariart(malariart: Malariart): Observable<string> {
    if (!malariart.id) {
      malariart.id = generateId(1000);
      this.malariarts.push(malariart);
      const report = this.reportService.getPlaceholderReports();
      report.id = malariart.id+'';
      report.testType = 'MalariaRT';
      report.userName = report.userName;
      report.userPhone = report.userPhone;
      report.creationDateTime = new Date();
      report.malariart = malariart;
      console.log(report);
      this.reports.push(report);


    } else {
      const index = this.malariarts.findIndex(value => value.id === malariart.id);
      this.malariarts[index] = malariart;
    }
    return of('Test Saved succesfully');
  }

  deleteMalariart(id: number): Observable<string> {
    const index = this.malariarts.findIndex(value => value.id === id);
    this.malariarts.splice(index, 1);
    return of('Test deleted succesfully');
  }
}
