import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HousekeepingPageRoutingModule } from './housekeeping-routing.module';
import { HousekeepingPage } from './housekeeping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HousekeepingPageRoutingModule
  ],
  declarations: [HousekeepingPage]
})
export class HousekeepingPageModule {}
