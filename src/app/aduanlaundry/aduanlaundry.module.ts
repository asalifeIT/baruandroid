import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AduanlaundryPageRoutingModule } from './aduanlaundry-routing.module';
import { AduanlaundryPage } from './aduanlaundry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanlaundryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AduanlaundryPage]
})
export class AduanlaundryPageModule {}
