import { Component, OnInit } from '@angular/core';
import { Diabetic } from '../diabetic';
import { Report } from 'src/app/reports/report';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DiabeticService } from '../diabetic.service';
import { ReportService } from 'src/app/reports/report.service';

@Component({
  selector: 'app-diabetic-view',
  templateUrl: './diabetic-view.component.html',
  styleUrls: ['./diabetic-view.component.css']
})
export class DiabeticViewComponent implements OnInit {
  diabetic = new Diabetic();
  report = new Report();

  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
              private diabeticService: DiabeticService, private reportService: ReportService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log('Selected id ' + id);
        this.diabeticService.getDiabetic(id)
          .subscribe(selectedDiabetic => this.diabetic = selectedDiabetic);

        this.reportService.getReport(id)
          .subscribe(selectedReport => this.report = selectedReport);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
