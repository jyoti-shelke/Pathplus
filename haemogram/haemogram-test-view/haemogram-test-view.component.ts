import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from 'src/app/reports/report';
import { Haemogram } from '../haemogram';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HaemogramService } from '../haemogram.service';
import { ReportService } from 'src/app/reports/report.service';

@Component({
  selector: 'app-haemogram-test-view',
  templateUrl: './haemogram-test-view.component.html',
  styleUrls: ['./haemogram-test-view.component.css']
})
export class HaemogramTestViewComponent  implements OnInit, OnDestroy{

  haemogram = new Haemogram();
  report = new Report();

  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
              private haemogramService: HaemogramService, private reportService: ReportService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log('Selected id ' + id);
        this.haemogramService.getHaemogram(id)
          .subscribe(selectedHaemogram => this.haemogram = selectedHaemogram);

        this.reportService.getReport(id)
          .subscribe(selectedReport => this.report = selectedReport);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
