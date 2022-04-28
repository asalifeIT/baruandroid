import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanmaintenancePageRoutingModule } from './aduanmaintenance-routing.module';

import { AduanmaintenancePage } from './aduanmaintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanmaintenancePageRoutingModule
  ],
  declarations: [AduanmaintenancePage]
})
export class AduanmaintenancePageModule {}
