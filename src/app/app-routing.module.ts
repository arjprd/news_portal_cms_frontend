import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./components/accounts/accounts.module')
    .then(m => m.AccountsModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./components/default/default.module')
    .then(m => m.DefaultModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
