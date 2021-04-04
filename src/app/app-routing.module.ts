import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path:'',component:UserLoginComponent },
  {path: '', redirectTo: '/admin-registration', pathMatch: 'full'},
  { path:'user-login',component:UserLoginComponent },
  { path:'user-registration',component:UserRegistrationComponent },
  { path:'admin-login',component:AdminLoginComponent },
  { path:'admin-registration',component:AdminRegistrationComponent },
  { path:'user-home/:name',component:UserHomeComponent },
  { path:'**',component:NotfoundComponent },//should be last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
