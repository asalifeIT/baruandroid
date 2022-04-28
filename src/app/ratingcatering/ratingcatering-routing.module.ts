import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingcateringPage } from './ratingcatering.page';

const routes: Routes = [
  {
    path: '',
    component: RatingcateringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingcateringPageRoutingModule {}
