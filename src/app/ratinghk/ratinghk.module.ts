import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatinghkPageRoutingModule } from './ratinghk-routing.module';

import { RatinghkPage } from './ratinghk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatinghkPageRoutingModule
  ],
  declarations: [RatinghkPage]
})
export class RatinghkPageModule {}
