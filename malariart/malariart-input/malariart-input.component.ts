import { Component, OnDestroy, OnInit } from '@angular/core';
import { Malariart } from '../malariart';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from '../../reports/report';
import { User } from '../../reports/user';
import { ReportService } from '../../reports/report.service';

@Component({
  selector: 'app-malaria-rt-input',
  templateUrl: './malariart-input.component.html',
  styleUrls: ['./malariart-input.component.css']
})
export class MalariartInputComponent implements OnInit, OnDestroy {

  malariart = new Malariart();
  user: User;
  report: Report;
  sub: Subscription;

  formGroup: FormGroup;

  constructor(private builder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private reportService: ReportService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log('Selected report id ' + id);
        this.reportService.getReport(id)
          .subscribe(report => {
            this.report = report;
            this.report.doctorName = report.userName;
          });
        console.log(this.report);
      } else {
        this.report = this.reportService.getPlaceholderReports();
        this.report.testType = 'Malariart';
        this.report.malariart = new Malariart();
      }
    });
    this.formGroup = new FormGroup({
      pbsforPm: new FormControl(),
      pVivax: new FormControl(),
      pFalciparum: new FormControl(),
      lotNo: new FormControl(),
      bNo: new FormControl(),
      expDate: new FormControl(),
      mfg: new FormControl(),
      sTyphiO: new FormControl(),
      sTyphiH: new FormControl(),
      notes: new FormControl(),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    this.report.userId = this.user.id;
    this.report.userName = this.user.name;
    this.report.userPhone = this.user.phone;
    this.report.doctorName = this.user.doctorName;
    console.log('Saving Report');
    this.reportService.saveReport(this.report).subscribe(result => {
      this.router.navigate(['/reports']);
    }, error => console.error(error));
  }

  receiveMessage($event) {
    console.log('Received event');
    this.user = $event;
    console.log(this.user);
  }
}
