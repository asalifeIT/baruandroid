import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TugashkPageRoutingModule } from './tugashk-routing.module';

import { TugashkPage } from './tugashk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TugashkPageRoutingModule
  ],
  declarations: [TugashkPage]
})
export class TugashkPageModule {}
