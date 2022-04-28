import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TgsmaintenancePageRoutingModule } from './tgsmaintenance-routing.module';

import { TgsmaintenancePage } from './tgsmaintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TgsmaintenancePageRoutingModule
  ],
  declarations: [TgsmaintenancePage]
})
export class TgsmaintenancePageModule {}
