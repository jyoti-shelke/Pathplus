import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardicTroponian} from '../cardic-troponian';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CardicTroponianService} from '../cardic-troponian.service';

@Component({
  selector: 'app-cardic-troponian-input',
  templateUrl: './cardic-troponian-input.component.html',
  styleUrls: ['./cardic-troponian-input.component.css']
})
export class CardicTroponianInputComponent implements OnInit, OnDestroy {

  cardicTroponian = new CardicTroponian();

  sub: Subscription;

  formGroup: FormGroup;

  constructor(private builder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private cardicTroponianService: CardicTroponianService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log('Selected id ' + id);
        this.cardicTroponianService.getCardicTroponian(id)
          .subscribe(selectedCardicTroponian => this.cardicTroponian = selectedCardicTroponian);
      } else {
        this.cardicTroponian = new CardicTroponian();
      }
    });
    this.formGroup = new FormGroup({
      paramI: new FormControl(),
      paramII: new FormControl(),
      notes: new FormControl(),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    this.cardicTroponianService.saveCardicTroponian(this.cardicTroponian)
      .subscribe(result => {
        this.router.navigate(['/cardic-troponians']);
      }, error => console.error(error));
  }

}
