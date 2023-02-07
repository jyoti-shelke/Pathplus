import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Haemogram } from '../haemogram';
import { HaemogramService } from '../haemogram.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-haemogram-list',
  templateUrl: './haemogram-list.component.html',
  styleUrls: ['./haemogram-list.component.css']
})
export class HaemogramListComponent implements OnInit {

  haemograms: Haemogram[];

  displayedColumns = ['id', 'haemoglobin', 'platelet', 'basophils', 'eosinophils', 'leukocyte', 'lymphocytes',
    'monocytes', 'neutrophils', 'notes', 'edit'];

  dataSource: MatTableDataSource<Haemogram>;

  constructor(private router: Router, private haemogramService: HaemogramService) {
  }

  ngOnInit() {
      this.haemogramService.getHaemograms()
      .subscribe(haemograms => this.haemograms = haemograms);
      this.dataSource = new MatTableDataSource(this.haemograms);
  }

  deleteTest(id: string) {
    this.haemogramService.deleteHaemogram(id)
      .subscribe(result => {
        this.ngOnInit();
      }, error => console.error(error));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
