import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Diabetic} from '../diabetic';
import {Subscription} from 'rxjs/Subscription';
import {DiabeticService} from '../diabetic.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ReportService } from 'src/app/reports/report.service';
import { Report } from 'src/app/reports/report';
import { User } from 'src/app/reports/user';

@Component({
  selector: 'app-diabetic-input',
  templateUrl: './diabetic-input.component.html',
  styleUrls: ['./diabetic-input.component.css']
})
export class DiabeticInputComponent implements OnInit, OnDestroy {
  // ngOnDestroy(): void {
  //   throw new Error("Method not implemented.");
  // }

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
        this.report.testType = 'Diabetic';
        this.report.diabetic = new Diabetic();
      }
    });
    this.formGroup = new FormGroup({
      fBloodSugar: new FormControl(),
      fUrineSugar: new FormControl(),
      fAcetone: new FormControl(),

      ppBloodSugar: new FormControl(),
      ppUrineSugar: new FormControl(),
      ppAcetone: new FormControl(),

      randomBloodS: new FormControl(),
      randomUrineS: new FormControl(),
      randomAcetone: new FormControl(),

      gtt1: new FormControl(),
      urineSugar: new FormControl(),
      ketone: new FormControl(),

      gtt2: new FormControl(),
      urineSugar1: new FormControl(),
      ketone1: new FormControl(),

      notes: new FormControl(),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // onSubmit() {
  //   this.diabeticService.saveDiabetic(this.diabetic)
  //     .subscribe(result => {
  //       this.router.navigate(['/diabetics']);
  //     }, error => console.error(error));
  // }
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
