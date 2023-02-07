import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MalariartrtService} from '../malariartrt.service';
import {Malariart} from '../malariart';
import {Subscription} from 'rxjs';
import {ReportService} from '../../reports/report.service';
import {Report} from '../../reports/report';

@Component({
  selector: 'app-tuberculosis-view',
  templateUrl: './malariart-view.component.html',
  styleUrls: ['./malariart-view.component.css']
})
export class MalariartViewComponent implements OnInit, OnDestroy {

  malariart = new Malariart();
  report = new Report();

  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
              private malariartService: MalariartrtService, private reportService: ReportService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log('Selected id ' + id);
        this.malariartService.getMalariart(id)
          .subscribe(selectedMalariart => this.malariart = selectedMalariart);

        this.reportService.getReport(id)
          .subscribe(selectedReport => this.report = selectedReport);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
