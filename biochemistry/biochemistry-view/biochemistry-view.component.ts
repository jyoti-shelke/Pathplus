import { Component, OnInit, OnDestroy } from '@angular/core';
import { Biochemistry } from '../biochemistry';
import { Report } from 'src/app/reports/report';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BiochemistryService } from '../biochemistry.service';
import { ReportService } from 'src/app/reports/report.service';


@Component({
  selector: 'app-biochemistry-view',
  templateUrl: './biochemistry-view.component.html',
  styleUrls: ['./biochemistry-view.component.css']
})
export class BiochemistryViewComponent implements OnInit, OnDestroy{
  biochemistry = new Biochemistry();
  report = new Report();

  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
              private biochemistryService: BiochemistryService, private reportService: ReportService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log('Selected id ' + id);
        this.biochemistryService.getBiochemistry(id)
          .subscribe(selectedBiochemistry => this.biochemistry = selectedBiochemistry);

        this.reportService.getReport(id)
          .subscribe(selectedReport => this.report = selectedReport);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
