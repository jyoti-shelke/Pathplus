import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from 'src/app/reports/report';
import { Hbsagrt } from '../hbsagrt';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HbsagrtService } from '../hbsagrt.service';
import { ReportService } from 'src/app/reports/report.service';

@Component({
  selector: 'app-hbsagrt-view',
  templateUrl: './hbsagrt-view.component.html',
  styleUrls: ['./hbsagrt-view.component.css']
})
export class HbsagrtViewComponent implements OnInit, OnDestroy{

  hbsagrt = new Hbsagrt();
  report = new Report();

  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
              private hbsagrtService: HbsagrtService, private reportService: ReportService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log('Selected id ' + id);
        this.hbsagrtService.getHbsagrt(id)
          .subscribe(selectedHbsagrt => this.hbsagrt = selectedHbsagrt);

        this.reportService.getReport(id)
          .subscribe(selectedReport => this.report = selectedReport);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
