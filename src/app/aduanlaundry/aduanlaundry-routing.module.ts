import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanlaundryPage } from './aduanlaundry.page';

const routes: Routes = [
  {
    path: '',
    component: AduanlaundryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanlaundryPageRoutingModule {}
