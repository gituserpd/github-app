import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {path:'', redirectTo: 'user', pathMatch: 'full'},
  {path:'user', component:UserViewComponent},
  {path:'login', component:UserLoginComponent},
  {path:'*', redirectTo: 'user', pathMatch: 'full'},
  {path:'**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
