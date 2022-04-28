import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingmaintenancePageRoutingModule } from './ratingmaintenance-routing.module';

import { RatingmaintenancePage } from './ratingmaintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingmaintenancePageRoutingModule
  ],
  declarations: [RatingmaintenancePage]
})
export class RatingmaintenancePageModule {}
