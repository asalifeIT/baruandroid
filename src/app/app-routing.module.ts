import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'home',
  canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
    {
      path: 'login',
      
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },
   {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'catering',
    loadChildren: () => import('./catering/catering.module').then( m => m.CateringPageModule)
  },
  {
    path: 'ratingcatering',
    loadChildren: () => import('./ratingcatering/ratingcatering.module').then( m => m.RatingcateringPageModule)
  },
  {
    path: 'aduanhk',
    loadChildren: () => import('./aduanhk/aduanhk.module').then( m => m.AduanhkPageModule)
  },
  {
    path: 'ratinghk',
    loadChildren: () => import('./ratinghk/ratinghk.module').then( m => m.RatinghkPageModule)
  },
  {
    path: 'aduanlaundry',
    loadChildren: () => import('./aduanlaundry/aduanlaundry.module').then( m => m.AduanlaundryPageModule)
  },
  {
    path: 'aduanmaintenance',
    loadChildren: () => import('./aduanmaintenance/aduanmaintenance.module').then( m => m.AduanmaintenancePageModule)
  },
  {
    path: 'ratingmaintenance',
    loadChildren: () => import('./ratingmaintenance/ratingmaintenance.module').then( m => m.RatingmaintenancePageModule)
  },
  {
    path: 'aduancatering',
    loadChildren: () => import('./aduancatering/aduancatering.module').then( m => m.AduancateringPageModule)
  },
  {
    path: 'housekeeping',
    loadChildren: () => import('./housekeeping/housekeeping.module').then( m => m.HousekeepingPageModule)
  },
  {
    path: 'tugashk',
    loadChildren: () => import('./tugashk/tugashk.module').then( m => m.TugashkPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'tgsmaintenance',
    loadChildren: () => import('./tgsmaintenance/tgsmaintenance.module').then( m => m.TgsmaintenancePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
