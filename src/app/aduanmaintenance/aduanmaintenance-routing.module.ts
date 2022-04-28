import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanmaintenancePage } from './aduanmaintenance.page';

const routes: Routes = [
  {
    path: '',
    component: AduanmaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanmaintenancePageRoutingModule {}
