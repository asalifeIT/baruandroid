import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduancateringPage } from './aduancatering.page';

const routes: Routes = [
  {
    path: '',
    component: AduancateringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduancateringPageRoutingModule {}
