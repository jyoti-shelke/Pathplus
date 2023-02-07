import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Haemogram } from '../haemogram';
import { Subscription } from 'rxjs/Subscription';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms';
import { Report } from '../../reports/report';
import { ReportService } from '../../reports/report.service';
import { User } from '../../reports/user';

@Component({
    selector: 'app-haemogram-input',
    templateUrl: './haemogram-input.component.html',
    styleUrls: ['./haemogram-input.component.css']
})
export class HaemogramInputComponent implements OnInit, OnDestroy {
    user: User;
    report: Report;
    sub: Subscription;
    formGroup: FormGroup;

    constructor(
        private builder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private reportService: ReportService
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params.id;
            if (id) {
                console.log('Selected report id ' + id);
                this.reportService.getReport(id).subscribe(report => {
                    this.report = report;
                    this.report.doctorName = report.userName;
                });
                console.log(this.report);
            } else {
                this.report = this.reportService.getPlaceholderReports();
                this.report.testType = 'Haemogram';
                this.report.haemogram = new Haemogram();
            }
        });
        this.formGroup = new FormGroup({
            haemoglobin: new FormControl(),
            platelet: new FormControl(),
            leukocyte: new FormControl(),
            neutrophils: new FormControl(),
            eosinophils: new FormControl(),
            basophils: new FormControl(),
            lymphocytes: new FormControl(),
            monocytes: new FormControl(),
            mcv: new FormControl(),
            mch: new FormControl(),
            mchc: new FormControl(),
            mpv: new FormControl(),
            pdw: new FormControl(),
            reticulocytes: new FormControl(),
            rbcMorphology: new FormControl(),
            esrByWintrobe: new FormControl(),
            wbcMorphology: new FormControl(),
            clotingTime: new FormControl(),
            bleedingTime: new FormControl(),
            bloodGroup: new FormControl(),
            rh: new FormControl(),
            parasite: new FormControl(),
            rbsl: new FormControl(),
            me: new FormControl(),
            tlc: new FormControl(),
            vdrlRpr: new FormControl(),
            notes: new FormControl()
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
        this.reportService.saveReport(this.report).subscribe(
            result => {
                this.router.navigate(['/reports']);
            },
            error => console.error(error)
        );
    }

    receiveMessage($event) {
        console.log('Received event');
        this.user = $event;
        console.log(this.user);
    }
}
