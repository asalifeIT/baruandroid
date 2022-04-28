import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TugashkPage } from './tugashk.page';

const routes: Routes = [
  {
    path: '',
    component: TugashkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TugashkPageRoutingModule {}
