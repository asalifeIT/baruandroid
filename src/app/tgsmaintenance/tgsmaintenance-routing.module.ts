import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TgsmaintenancePage } from './tgsmaintenance.page';

const routes: Routes = [
  {
    path: '',
    component: TgsmaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TgsmaintenancePageRoutingModule {}
