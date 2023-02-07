import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Prothrombin} from '../prothrombin';
import {Subscription} from 'rxjs/Subscription';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {User} from '../../reports/user';
import { ReportService } from 'src/app/reports/report.service';
import { Report } from 'src/app/reports/report';

@Component({
  selector: 'app-prothrombin-input',
  templateUrl: './prothrombin-input.component.html',
  styleUrls: ['./prothrombin-input.component.css']
})
export class ProthrombinInputComponent implements OnInit, OnDestroy {

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
        this.report.testType = 'Prothrombin';
        this.report.prothrombin = new Prothrombin();
      }
    });
    this.formGroup = new FormGroup({
      controlTime: new FormControl(),
      patientTime: new FormControl(),
      internationalNormalRatio: new FormControl(),
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
