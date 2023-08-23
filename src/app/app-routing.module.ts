import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetamaskConnectComponent } from './metamask-connect/metamask-connect.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  {path:'dashboard',component:MetamaskConnectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
