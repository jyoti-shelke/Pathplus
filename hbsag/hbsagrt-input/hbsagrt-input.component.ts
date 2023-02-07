import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hbsagrt } from '../hbsagrt';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HbsagrtService } from '../hbsagrt.service';
import { User } from 'src/app/reports/user';
import { Report } from 'src/app/reports/report';
import { ReportService } from 'src/app/reports/report.service';

@Component({
  selector: 'app-hbsagrt-input',
  templateUrl: './hbsagrt-input.component.html',
  styleUrls: ['./hbsagrt-input.component.css']
})
export class HbsagrtInputComponent implements OnInit, OnDestroy {

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
        this.report.testType = 'Hbsagrt';
        this.report.hbsagrt = new Hbsagrt();
      }
    });
    this.formGroup = new FormGroup({

      result: new FormControl(),
      method: new FormControl(),
      lotNo: new FormControl(),
      bNo: new FormControl(),
      mfg: new FormControl(),
      expDate: new FormControl(),
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
