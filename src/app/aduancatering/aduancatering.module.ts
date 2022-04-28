import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AduancateringPageRoutingModule } from './aduancatering-routing.module';
import { AduancateringPage } from './aduancatering.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AduancateringPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AduancateringPage]
})
export class AduancateringPageModule {}
