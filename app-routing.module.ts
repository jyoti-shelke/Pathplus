import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaemogramListComponent } from './haemogram/haemogram-list/haemogram-list.component';
import { HaemogramInputComponent } from './haemogram/haemogram-input/haemogram-input.component';
import { DiabeticInputComponent } from './diabetic/diabetic-input/diabetic-input.component';
import { HivInputComponent } from './hiv/hiv-input/hiv-input.component';
import { UrineInputComponent } from './urine/urine-input/urine-input.component';
import { BiochemistryInputComponent } from './biochemistry/biochemistry-input/biochemistry-input.component';
import { CardicTroponianInputComponent } from './cardic-troponian/cardic-troponian-input/cardic-troponian-input.component';
import { HbsagrtInputComponent } from './hbsag/hbsagrt-input/hbsagrt-input.component';
import { TuberculosisrtInputComponent } from './tuberculosis/tuberculosisrt-input/tuberculosisrt-input.component';
import { TuberculosisrtViewComponent } from './tuberculosis/tuberculosisrt-view/tuberculosisrt-view.component';
import { WidalInputComponent } from './widal/widal-input/widal-input.component';
import { MalariartInputComponent } from './malariart/malariart-input/malariart-input.component';
import { ProthrombinInputComponent } from './prothrombin/prothrombin-input/prothrombin-input.component';
import { ReportsOverviewComponent } from './reports/reports-overview/reports-overview.component';
import { MalariartViewComponent } from './malariart/malariart-view/malariart-view.component';
import { HaemogramTestViewComponent } from './haemogram/haemogram-test-view/haemogram-test-view.component';
import { DiabeticViewComponent } from './diabetic/diabetic-view/diabetic-view.component';
import { UrineViewComponent } from './urine/urine-view/urine-view.component';
import { HbsagrtViewComponent } from './hbsag/hbsagrt-view/hbsagrt-view.component';
import { WidalViewComponent } from './widal/widal-view/widal-view.component';
import { BiochemistryViewComponent } from './biochemistry/biochemistry-view/biochemistry-view.component';
const routes: Routes = [
  { path: '', redirectTo: '/reports', pathMatch: 'full' },
  { path: 'haemogram', component: HaemogramInputComponent },
  { path: 'haemogram/:id', component: HaemogramInputComponent },
  { path: 'haemograms', component: HaemogramListComponent },
  { path:'haemogram/view/:id',component:HaemogramTestViewComponent},
  { path: 'reports', component: ReportsOverviewComponent },
  { path: 'diabetic', component: DiabeticInputComponent },
  { path: 'diabetic/:id', component: DiabeticInputComponent },
  { path:'diabetic/view/:id',component:DiabeticViewComponent},
  { path: 'diabetics', component: DiabeticInputComponent },
  { path: 'hiv', component: HivInputComponent },
  { path: 'hiv/:id', component: HivInputComponent },
  { path: 'hivs', component: HivInputComponent },
  { path: 'urine', component: UrineInputComponent },
  { path: 'urine/:id', component: UrineInputComponent },
  { path:'urine/view/:id',component:UrineViewComponent},
  { path: 'urines', component: UrineInputComponent },
  { path: 'malariart', component: MalariartInputComponent },
  { path: 'malariart/:id', component: MalariartInputComponent },
  { path: 'malariart/view/:id', component: MalariartViewComponent },
  { path: 'malariarts', component: MalariartInputComponent },
  { path: 'prothrombin', component: ProthrombinInputComponent },
  { path: 'prothrombin/:id', component: ProthrombinInputComponent },
  { path: 'prothrombins', component: ProthrombinInputComponent },
  { path: 'biochemistry', component: BiochemistryInputComponent },
  { path: 'biochemistry/:id', component: BiochemistryInputComponent },
  { path: 'biochemistry/view/:id', component: BiochemistryViewComponent },
  { path: 'biochemistrys', component: BiochemistryInputComponent },
  { path: 'cardic-troponian', component: CardicTroponianInputComponent },
  { path: 'cardic-troponian/:id', component: CardicTroponianInputComponent },
  { path: 'cardic-troponians', component: CardicTroponianInputComponent },
  { path: 'hbsagrt', component: HbsagrtInputComponent },
  { path: 'hbsagrt/:id', component: HbsagrtInputComponent },
  { path:'hbsagrt/view/:id',component:HbsagrtViewComponent},
  { path: 'hbsagrts', component: HbsagrtInputComponent },
  { path: 'tuberculosisrt', component: TuberculosisrtInputComponent },
  { path: 'tuberculosisrt/:id', component: TuberculosisrtInputComponent },
  { path: 'tuberculosisrt/view/:id', component: TuberculosisrtViewComponent },
  { path: 'tuberculosisrts', component: TuberculosisrtInputComponent },
  { path: 'widal', component: WidalInputComponent },
  { path: 'widal/:id', component: WidalInputComponent },
  { path:'widal/view/:id',component:WidalViewComponent},
  { path: 'widals', component: WidalInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
