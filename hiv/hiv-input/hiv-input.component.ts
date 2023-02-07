import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hiv } from '../hiv';
import { Subscription } from 'rxjs/Subscription';
import { HivService } from '../hiv.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hiv-input',
  templateUrl: './hiv-input.component.html',
  styleUrls: ['./hiv-input.component.css']
})
export class HivInputComponent implements OnInit, OnDestroy {

  hiv = new Hiv();

  sub: Subscription;

  formGroup: FormGroup;

  constructor(private builder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private hivService: HivService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log('Selected id ' + id);
        this.hivService.getHiv(id)
          .subscribe(selectedHiv => this.hiv = selectedHiv);
      } else {
        this.hiv = new Hiv();
      }
    });
    this.formGroup = new FormGroup({
      hivI: new FormControl(),
      hivII: new FormControl(),
      hivIGp160Env: new FormControl(),
      hivIGp120Env: new FormControl(),
      hivIp66Pol: new FormControl(),
      hivIp55Gag: new FormControl(),
      hivIp51Pol: new FormControl(),
      hivIGp41Env: new FormControl(),
      hivIp39Pol: new FormControl(),
      hivIp31Gag: new FormControl(),
      hivIp24Gag: new FormControl(),
      hivIp55Gag17: new FormControl(),
      kitUsed: new FormControl(),
      stripNo: new FormControl(),
      lotNo: new FormControl(),
      expDate: new FormControl(),
      result: new FormControl(),
      method: new FormControl(),
      notes: new FormControl(),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    this.hivService.saveHiv(this.hiv)
      .subscribe(result => {
        this.router.navigate(['/hivs']);
      }, error => console.error(error));
  }
}
