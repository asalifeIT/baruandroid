import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AduanhkPage } from './aduanhk.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: AduanhkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanhkPageRoutingModule {}
