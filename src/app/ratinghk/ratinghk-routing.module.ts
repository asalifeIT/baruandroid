import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatinghkPage } from './ratinghk.page';

const routes: Routes = [
  {
    path: '',
    component: RatinghkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatinghkPageRoutingModule {}
