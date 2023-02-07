import { Component, OnDestroy, OnInit } from '@angular/core';
import { Biochemistry } from '../biochemistry';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BiochemistryService } from '../biochemistry.service';
import { Report } from 'src/app/reports/report';
import { User } from 'src/app/reports/user';
import { ReportService } from 'src/app/reports/report.service';


@Component({
  selector: 'app-biochemistry-input',
  templateUrl: './biochemistry-input.component.html',
  styleUrls: ['./biochemistry-input.component.css']
})
export class BiochemistryInputComponent implements OnInit, OnDestroy {

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
        this.report.testType = 'Biochemistry';
        this.report.biochemistry = new Biochemistry();
      }
    });
    this.formGroup = new FormGroup({
      serum: new FormControl(),
      srBilirubinTotal: new FormControl(),
      direct: new FormControl(),
      indirect: new FormControl(),
      sgpt: new FormControl(),
      sgot: new FormControl(),
      slap: new FormControl(),
      bloodUrea: new FormControl(),
      sCreatinine: new FormControl(),
      sUricAcid: new FormControl(),

      serumTotalCholesterol: new FormControl(),
      serumTriglycerides: new FormControl(),
      hdlCholestrerol: new FormControl(),
      ldlCholestrerol: new FormControl(),

      serumcalcium: new FormControl(),
      serumSodium: new FormControl(),
      serumPottasium: new FormControl(),
      serumcloride: new FormControl(),

      bloodSugar: new FormControl(),
      serumProtein: new FormControl(),
      serumAlbumine: new FormControl(),

      serumAmylase: new FormControl(),
      crpTest: new FormControl(),
      serumCholinesterase: new FormControl(),
      serumLipase: new FormControl(),
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
