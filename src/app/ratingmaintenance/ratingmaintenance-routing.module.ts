import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingmaintenancePage } from './ratingmaintenance.page';

const routes: Routes = [
  {
    path: '',
    component: RatingmaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingmaintenancePageRoutingModule {}
